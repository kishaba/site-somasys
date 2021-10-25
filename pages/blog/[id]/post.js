import Prismic from 'prismic-javascript';
import { useRouter } from 'next/router';
import moment from 'moment';
import { RichText } from 'prismic-reactjs';

export async function getServerSideProps({ params }) {
  const client = await Prismic.client(process.env.PRISMIC_CLIENT);
  const post = await client.query(Prismic.Predicates.at('document.id', params.id));
  moment.locale('pt-br');
  const data = new moment(Date(post.results[0].first_publication_date.split('T')[0])).format('ll');

  // Pass post data to the page via props
  return {
    props: {
      post: post,
      data: data,
    },
    // Re-generate the post at most once per second
    // if a request comes in
  };
}

function Post({ post, data }) {
  const router = useRouter();
  return (
    <div>
      <main className='relative container mx-auto bg-white px-4'>
        <div className='relative -mx-4 top-0 pt-[17%] overflow-hidden'>
          <img
            className='absolute inset-0 object-cover object-top w-full h-full filter blur bg-gradient-to-r from-green-soma to-blue-soma h-screen
          '
          />
        </div>
        <div className='mt-[-10%] w-1/2 mx-auto'>
          <div className='relative pt-[56.25%] overflow-hidden rounded-2xl'>
            <img
              className='w-full h-full absolute inset-0 object-contain'
              src='../../logo.png'
              alt='foto'
            />
          </div>
        </div>
        <article className='max-w-prose mx-auto py-8'>
          <h1 className='text-2xl font-bold'>{post.results[0].data.title[0].text}</h1>
          <h2 className='mt-2 text-sm text-gray-500'>Admin, {data}</h2>
          <div className='mt-6'>{RichText.render(post.results[0].data.post)}</div>
        </article>
      </main>
      {/* <pre>{JSON.stringify(post.results[0].data.post, null, 2)}</pre> */}
    </div>
  );
}

export default Post;
