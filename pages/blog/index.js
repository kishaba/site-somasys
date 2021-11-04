import Prismic from 'prismic-javascript';
import Card from '../../components/Blog/Card/Index';

const Blog = (props) => {
  return (
    <section className='text-gray-600 body-font h-screen'>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='font-bold text-4xl py-3'>Atualizações</h1>
          <p className='pb-6'>Verões disponibilizadas pelos sistemas Somasys </p>
          <div className='-my-8 divide-y-2 divide-gray-100'>
            {props.posts.map((post) => {
              return (
                <Card
                  key={post.id}
                  categoria={post.data.categoria}
                  title={post.data.title[0].text}
                  resumo={post.data.resumo[0].text}
                  postId={post.id}
                  data={post.data.release_date}
                />
              );
            })}
          </div>
          {/* <pre>{JSON.stringify(props.posts, null, 2)}</pre> */}
        </div>
      </section>
    </section>
  );
};

export async function getServerSideProps({ res }) {
  const client = await Prismic.client(process.env.PRISMIC_CLIENT);
  const posts = await client.query(Prismic.Predicates.at('document.type', 'blog_post'));

  return {
    props: {
      posts: posts.results,
    },
  };
}

export default Blog;
