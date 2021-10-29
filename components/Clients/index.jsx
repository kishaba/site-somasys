import { useEffect, useRef, useState } from "react";


const Clients = () => {
    const clientes = [
        {
            color: "#0088FE",
            title: "Gestão empresarial",
            image: {
                src: 'gestao.jpg',
                alt: 'Gestão Empresarial'
            }
        },
        {
            color: "#00C49F",
            title: "Soluções Comerciais",
            image: {
                src: 'solucao.jpg',
                alt: 'Soluções Comerciais'
            },
        },
        {
            color: "#FFBB28",
            title: "Serviços Oferecidos",
            image: {
                src: 'servico.jpg',
                alt: 'Serviços Oferecidos'
            }
        },
        {
            color: "#483D8B",
            title: "Serviços Oferecidos",
            image: {
                src: 'servico.jpg',
                alt: 'Serviços Oferecidos'
            }
        },

        {
            color: "#0088FE",
            title: "Gestão empresarial",
            image: {
                src: 'gestao.jpg',
                alt: 'Gestão Empresarial'
            }
        },
        {
            color: "#00C49F",
            title: "Soluções Comerciais",
            image: {
                src: 'solucao.jpg',
                alt: 'Soluções Comerciais'
            },
        },
        {
            color: "#FFBB28",
            title: "Serviços Oferecidos",
            image: {
                src: 'servico.jpg',
                alt: 'Serviços Oferecidos'
            }
        },
        {
            color: "#483D8B",
            title: "Serviços Oferecidos",
            image: {
                src: 'servico.jpg',
                alt: 'Serviços Oferecidos'
            }
        }
    ]



    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === clientes.length - 1 ? 0 : prevIndex + 1
                ),
            8000
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 pt-24 mx-auto text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                    PARCEIROS
                </h1>

                <p className="lg:w-2/3 mx-auto leading-relaxed text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>





            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {clientes.map((cliente, index) => (
                        <div
                            className="slide inline-block w-full"
                            key={index}
                            style={{ backgroundColor: cliente.color }}
                        >
                            <img
                                alt={cliente.image.alt}
                                className="object-contain h-full object-center block"
                                src={cliente.image.src}
                            />
                        </div>
                    ))}
                </div>

                <div className="slideshowDots">
                    {clientes.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>




            {/* <div className="container px-5 py-8 mx-auto flex flex-wrap ">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full  object-contain h-full object-center block"
                                src="logo2.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-contain h-full object-center block"
                                src="logo3.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-contain h-full object-center block"
                                src="logo4.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-contain h-full object-center block"
                                src="logo5.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full h-full object-contain object-center block"
                                src="logo5.png"
                            />
                        </div>

                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full h-full object-contain object-center block"
                                src="logo4.png"
                            />
                        </div>

                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-contain h-full object-center block"
                                src="logo3.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-contain h-full object-center block"
                                src="logo2.png"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Clients;