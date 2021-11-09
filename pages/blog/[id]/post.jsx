import Prismic from 'prismic-javascript';
import { useRouter } from 'next/router';
import moment from 'moment';
import { RichText } from 'prismic-reactjs';

export async function getServerSideProps({ params }) {
  const client = await Prismic.client(process.env.PRISMIC_CLIENT);
  const post = await client.query(Prismic.Predicates.at('document.id', params.id));
  moment.locale('pt-br');
  const data = new moment(Date(post.results[0].first_publication_date.split('T')[0])).format('ll');

  return {
    props: {
      post: post,
      data: data,
    },
  };
}

function Post({ post, data }) {
  const router = useRouter();
  return (
    <>
      <div className='-mx-4 top-0 pt-[17%] overflow-hidden'>
        <img
          className='absolute inset-0 object-cover object-top w-full h-36 filter blur bg-gradient-to-r from-green-soma to-blue-soma'
        />
      </div>
      <div className='mt-[-10%] md:mt-[-5%] lg:mt-[-14%] w-36 lg:w-96 mx-auto'>
        <div className='relative pt-[56.25%]  rounded-2xl'>
          <a href='/'>
            <img className='absolute inset-0 object-contain' src='../../logo.png' alt='foto' />
          </a>
        </div>
      </div>


      <div className='max-w-prose mx-auto mb-6 py-8 relative'>
        <h1 className='text-3xl font-bold'>{post.results[0].data.title[0].text}</h1>
        <h2 className='mt-2 text-sm text-gray-500'>Admin, {data}</h2>
        <div className='mt-6'>{RichText.render(post.results[0].data.post)}</div>
      </div>


      {/* Footer */}

      <div className='bg-gradient-to-l from-green-soma to-blue-soma w-full inset-x-0 bottom-0'>
        <div className='px-5 mx-auto text-center'>
          <p className='text-lg text-white'>Uma empresa que você pode confiar!</p>
          <p className='text-sm text-white'>© {new Date().getFullYear()} Somasys</p>
        </div>
      </div>


    </>
  );
}

export default Post;
