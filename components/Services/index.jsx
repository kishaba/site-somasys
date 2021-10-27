const Services = () => {
  return (
    <div className='text-gray-600 body-font bg-gradient-to-r from-green-soma to-blue-soma items-center'>
      <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='flex-grow flex flex-wrap mb-10 md:text-left text-center order-first'>
          <div className='flip-card max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <div className=' flip-card-inner'>
              <div className='flip-card-front'>
                <img className='object-cover ' src='gestao.jpg' alt='Gestão Empresarial' />
                <h1 className='text-white text-xl title-font font-medium mb-3'>
                  Gestão empresarial
                </h1>
              </div>
              <div
                className='flip-card-back  absolute z-0'
                style={{
                  background: "url('gestao_espelhada.jpg')",
                  backgroundSize: 'contain',
                }}
              >
                <div className='px-4 py-2 bg-black h-full z-40 opacity-80'>
                  <h1 className='text-white text-4xl title-font font-medium mb-3 '>
                    Gestão empresarial
                  </h1>
                  <div className='leading-relaxed text-base text-white'>
                    <ul className='list-none'>
                      <li>Sistemas de Integração de Gestão Comercial (ERP)</li>
                      <li>PAF-ECF Homologado</li>
                      <li>Fluxo de Caixa</li>
                      <li>Assistente de Compras</li>
                      <li>Automação na Entrada de Mercadorias</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flip-card max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <div className=' flip-card-inner'>
              <div className='flip-card-front'>
                <img className='object-cover ' src='solucao.jpg' alt='Gestão Empresarial' />
                <h1 className='text-white text-xl title-font font-medium mb-3'>
                  Soluções Comerciais
                </h1>
              </div>
              <div
                className='flip-card-back  absolute z-0'
                style={{
                  background: "url('solucao_espelhada.jpg')",
                  backgroundSize: 'contain',
                }}
              >
                <div className='px-4 py-2 bg-black h-full z-40 opacity-80'>
                  <h1 className='text-white text-4xl title-font font-medium mb-3 '>
                    Soluções Comerciais
                  </h1>
                  <div className='leading-relaxed text-base text-white'>
                    <ul className='list-none'>
                      <li>Integração com Sistemas de Terceiros</li>
                      <li>Sped Fiscal</li>
                      <li>Sped EFD PIS-Cofins</li>
                      <li>Geração, Importação e Emissão de NF-e</li>
                      <li>Homologação de Cobrança Bancária e cobrança integrada</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flip-card max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <div className=' flip-card-inner'>
              <div className='flip-card-front'>
                <img className='object-cover ' src='servico.jpg' alt='Gestão Empresarial' />
                <h1 className='text-white text-xl title-font font-medium mb-3'>
                  Serviços Oferecidos
                </h1>
              </div>
              <div
                className='flip-card-back  absolute z-0'
                style={{
                  background: "url('servico_espelhada.jpg')",
                  backgroundSize: 'contain',
                }}
              >
                <div className='px-4 py-2 bg-black h-full z-40 opacity-80'>
                  <h1 className='text-white text-4xl title-font font-medium mb-3 '>
                    Serviços Oferecidos
                  </h1>
                  <div className='leading-relaxed text-base text-white'>
                    <ul className='list-none'>
                      <li>Assessoria de Fluxo de TI</li>
                      <li>Inteligência do negócio</li>
                      <li>Agilidade no Processo de Tomada de Decisão</li>
                      <li>Seguimento das Normas Legais</li>
                      <li>Informações em Tempo Real da Empresa e/ou suas Filiais</li>
                      <li>Centralização de Dados diferenciando por Filial</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
