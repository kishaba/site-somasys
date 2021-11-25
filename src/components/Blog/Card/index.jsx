import Link from 'next/link';

const Card = ({ categoria = '', title = '', resumo = '', postId = '', data = '' }) => {
  return (
    <div className='divide-y-2 divide-gray-100'>
      <div className='py-8 flex md:flex-nowrap '>

        <div className='md:w-64 md:mb-0 flex flex-col'>
          <span className='font-semibold title-font text-gray-700'>{categoria}</span>
          <span className='mt-1 text-gray-500 text-sm'>{data}</span>
        </div>

        <div className='pl-3'>
          <h2 className='mb-2 ml-3 lg:ml-0 text-lg lg:text-2xl font-medium title-font'>
            {title}
          </h2>
            
          <p className='ml-3 lg:ml-0 leading-relaxed'>{resumo}</p>
          <Link href={`/blog/${postId}/post`}>
            <a className='text-blue-soma inline-flex items-center hover:cursor-pointer py-3 ml-3 lg:ml-0'>
              Leia Mais
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
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
