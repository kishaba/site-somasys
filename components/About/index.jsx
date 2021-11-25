import Image from 'next/image';

const About = () => {
    return (
        <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className={`
                    lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start
                    md:text-left mb-16 md:mb-0 items-center text-center
                `}>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Estamos presentes na área de automação de software desde 1994
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        temos reconhecimento através da criação
                        de soluções inteligentes desenvolvidas com seriedade e competência, atendendo a legislação e em constante
                        atualização de sua tecnologia para disponibilizar sempre um software de qualidade aos nossos clientes.
                    </p>
                    <div className="flex items-center">
                        <button className="text-white bg-green-soma border-0 py-2 px-6 focus:outline-none hover:bg-blue-soma rounded text-lg">
                            Conheça a Somasys!
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        unoptimized={true}
                        src="3460022.jpg"
                        alt="Hero"
                        width="100%"
                        height="100%"
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
