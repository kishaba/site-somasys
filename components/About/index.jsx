// import UserContext from '../components/context'
// import { useContext } from 'react';

import { forwardRef, useRef } from "react";

const About = forwardRef((props, ref) => {

    return (
        <div ref={ref} className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10 rounded-lg overflow-hidden">
                    <img
                        className="object-cover object-center"
                        alt="hero"
                        src="mao.jpg"
                    />
                </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Estamos presentes na área de automação de software desde 1995
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Estamos presentes na área de automação de software desde 1995, temos reconhecimento através da criação
                        de soluções inteligentes desenvolvidas com seriedade e competência, atendendo a legislação e em constante
                        atualização de sua tecnologia para disponibilizar sempre um software de qualidade aos nossos clientes.
                    </p>
                    {/* <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Button
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
})

export default About;
