import Prismic from 'prismic-javascript';
import Link from 'next/link';

const Blog = (props) => {
  return (
    <section className='text-gray-600 body-font h-screen w-screen'>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='font-bold text-4xl py-3'>Atualizações</h1>
          <p className='pb-6'>Verões disponibilizadas pelos sistemas Somasys </p>
          <div className='-my-8 divide-y-2 divide-gray-100'>
            {props.posts.map((post) => {
              return (
                <div className='py-8 flex flex-wrap md:flex-nowrap ' key={post.id}>
                  <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                    <span className='font-semibold title-font text-gray-700'>
                      {post.data.categoria}
                    </span>
                    <span className='mt-1 text-gray-500 text-sm'>12 Jun 2019</span>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                      {post.data.title[0].text}
                    </h2>
                    <p className='leading-relaxed'>{post.data.resumo[0].text}</p>
                    <Link href={`/blog/${post.id}/post`}>
                      <a className='text-blue-soma inline-flex items-center hover:cursor-pointer py-3'>
                        Learn More
                        <svg
                          className='w-4 h-4 ml-2'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M5 12h14' />
                          <path d='M12 5l7 7-7 7' />
                        </svg>
                      </a>
                    </Link>{' '}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <pre>{JSON.stringify(props.posts, null, 2)}</pre>
      <div className='px-5 py-24 mx-auto'>
        <div className='lg:flex flex-wrap'>
          {props.posts.map((post) => {
            return (
              <div className='p-4 text-center lg:w-1/3 ' key={post.id}>
                <div className='h-full bg-white  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'>
                  {post.data.categoria && (
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      {post.data.categoria}
                    </h2>
                  )}
                  <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 '>
                    {post.data.title[0].text}
                  </h1>
                  {post.data.resumo && post.data.resumo[0].text && (
                    <p className='leading-relaxed mb-3 w-auto'>{post.data.resumo[0].text}</p>
                  )}
                  <Link href={`/blog/${post.id}/post`}>
                    <a className='text-blue-soma inline-flex items-center hover:cursor-pointer'>
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M5 12h14' />
                        <path d='M12 5l7 7-7 7' />
                      </svg>
                    </a>
                  </Link>{' '}
                  <div className='text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4'>
                    <span className='text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth={2}
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth={2}
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </section>
  );
};

export async function getServerSideProps({ res }) {
  const client = await Prismic.client(process.env.PRISMIC_CLIENT);
  const posts = await client.query(Prismic.Predicates.at('document.type', 'blog_post'));

  return {
    props: {
      date: Date.now(),
      posts: posts.results,
    },
  };
}

export default Blog;
