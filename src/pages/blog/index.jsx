import Prismic from 'prismic-javascript';
import Card from '../../components/Blog/Card/Index';
import { useState } from 'react';
import BlogHeader from '../../components/Blog/Header';

export async function getServerSideProps({ res }) {
  const client = await Prismic.client(process.env.PRISMIC_CLIENT);
  const posts = await client.query(Prismic.Predicates.at('document.type', 'blog_post'));

  return {
    props: {
      posts: posts.results,
    },
  };
}

const Blog = (props) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue.toLowerCase());
    if (searchInput !== '') {
      const filteredData = props.posts.filter((post) => {
        return post.data.title[0].text.toLowerCase().includes(searchInput);
      });
      setFilteredResults(filteredData);
    }
  };

  return (
    <>
      <BlogHeader />

      <div className='flex flex-col justify-center items-center px-8 py-8'>
        <div className='px-8'>
          <div className='w-full py-6'>
            <input
              className={`
              shadow border rounded p-3 w-full text-gray-700              
              focus:outline-none focus:shadow-outline 
            `}
              id='pesquisa'
              type='text'
              placeholder='Pesquisa'
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>

          <h1 className='font-bold text-3xl md:text-4xl py-3'>Atualizações</h1>
          <p className='pb-6'>Todas as útimas versões disponibilizadas dos sistemas Somasys, direto da equipe. </p>
          <hr className="pt-4"/>

          <div className='divide-y-2'>
            {searchInput.length > 1
              ? filteredResults.map((post) => {
                return (
                  <Card
                    key={post.id}
                    categoria={post.data.categoria}
                    title={post.data.title[0].text}
                    resumo={post.data.resumo[0].text}
                    postId={post.id}
                    data={post.data.release_date}
                  />
                )
              })
              : props.posts.map((post) => {
                return (
                  <Card
                    key={post.id}
                    categoria={post.data.categoria}
                    title={post.data.title[0].text}
                    resumo={post.data.resumo[0].text}
                    postId={post.id}
                    data={post.data.release_date}
                  />
                )
              })}
          </div>

        </div>
      </div>
      <BlogFooter />
    </>
  )
}

const BlogFooter = () => {
  return (

    <div className='bg-gradient-to-l from-green-soma to-blue-soma'>
      <div className='px-5 mx-auto text-center'>
        <p className='text-lg text-white'>Uma empresa que você pode confiar!</p>
        <p className='text-sm text-white'>© {new Date().getFullYear()} Somasys</p>
      </div>
    </div>
  )
}

Blog.Footer = BlogFooter

export default Blog;
