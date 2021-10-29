import Card from "./Card";

const Services = () => {
  let gestao = {
    title: "Gestão empresarial",
    image: {
      src: 'gestao.jpg',
      alt: 'Gestão Empresarial'
    },
    style: {
      background: "url('gestao_espelhada.jpg')",
      backgroundSize: 'contain',
    },
    lista: [
      'Sistemas de Integração de Gestão Comercial (ERP)',
      'PAF-ECF Homologado',
      'Fluxo de Caixa',
      'Assistente de Compras',
      'Automação na Entrada de Mercadorias'
    ]
  }

  let solucoes = {
    title: "Soluções Comerciais",
    image: {
      src: 'solucao.jpg',
      alt: 'Soluções Comerciais'
    },
    style: {
      background: "url('solucao_espelhada.jpg')",
      backgroundSize: 'contain',
    },
    lista: [
      'Integração com Sistemas de Terceiros',
      'Sped Fiscal',
      'Sped EFD PIS-Cofins',
      'Geração, Importação e Emissão de NF-e',
      'Homologação de Cobrança Bancária e cobrança integrada'
    ]
  }

  let servicos = {
    title: "Serviços Oferecidos",
    image: {
      src: 'servico.jpg',
      alt: 'Serviços Oferecidos'
    },
    style: {
      background: "url('servico_espelhada.jpg')",
      backgroundSize: 'contain',
    },
    lista: [
      'Assessoria de Fluxo de TI',
      'Inteligência do negócio',
      'Agilidade no Processo de Tomada de Decisão',
      'Informações em Tempo Real da Empresa e/ou suas Filiais',
      'Centralização de Dados diferenciando por Filial'
    ]
  }


  return (
    <div className='text-gray-600 body-font bg-gradient-to-r from-green-soma to-blue-soma items-center'>


      <div className="container px-5 pt-24 mx-auto text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          ALGUNS DE NOSSOS SERVIÇOS
        </h1>

        <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>


      <div className='container px-5 py-8 mx-auto flex md:items-center md:flex-row flex-col'>


        <Card>{gestao}</Card>
        <Card>{solucoes}</Card>
        <Card>{servicos}</Card>


      </div>
    </div>
  );
};

export default Services;
