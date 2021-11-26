import Image from 'next/image';
import { useEffect, useState } from "react";

const BASE_URL = 'http://localhost:3000/api'


const Clients = () => {
    const [clientes, setClientes] = useState([])

    async function carregarClientes() {
        const resp = await fetch(`${BASE_URL}/logotipos`)
        const cliente = await resp.json()

        setClientes(cliente)
    }

    useEffect(() => {
        carregarClientes()
    }, [])

    const [index, setIndex] = useState(0);

    return (
        <div className="text-gray-600 body-font h-screen">
            <div className="container py-24 mx-auto text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                    PARCEIROS
                </h1>

                <p className="lg:w-2/3 mx-auto leading-relaxed text mb-3">
                    Algumas das empresas que confiam na Somasys.
                </p>
            </div>


            <div className="slideshow px-8 py-8">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {clientes.map((cliente, idx) =>
                        <div
                            className="w-full md:w-64 md:h-48 mx-2 inline-block relative"
                            key={idx}
                        >
                            <Image
                                priority
                                src={cliente.src}
                                alt={cliente.alt}
                                layout="fill"
                                objectFit='contain'
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Clients;