import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slide from './Slide/index';

const BASE_URL = 'http://localhost:3000/api';

const Clients = () => {
  const [clientes, setClientes] = useState([]);
  async function carregarClientes() {
    const resp = await fetch(`${BASE_URL}/logotipos`);
    const cliente = await resp.json();

    setClientes(cliente);
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  const [index, setIndex] = useState(0);

  return (
    <div className='text-gray-600 body-font'>
      <div className='container py-24 mx-auto text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-black'>PARCEIROS</h1>

        <p className='lg:w-2/3 mx-auto leading-relaxed text mb-3'>
          Algumas das empresas que confiam na Somasys.
        </p>
        <div className='px-8 py-8 '>
          <Slide>
            {clientes.map((cliente, idx) => (
              <div
                className='h-24 justify-center items-center md:w-64 md:h-48 mx-2 relative'
                key={idx}
              >
                <Image
                  priority
                  src={cliente.src}
                  alt={cliente.alt}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Clients;
