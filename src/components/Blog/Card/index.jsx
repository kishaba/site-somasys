import Link from 'next/link';
import { IconeSeta } from '../../Icones';

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
              {IconeSeta}
            </a>
          </Link>          
        </div>
      </div>
    </div>
  );
};

export default Card;
