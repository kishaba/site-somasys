import Image from 'next/image';
import { useEffect, useRef, useState } from "react";

const Clients = () => {
    const clientes = [
        [
            {
                color: "#00C49F",
                image: {
                    src: 'milenium.png',
                    alt: 'Supermercado Milenium'
                },
            },
            {
                color: "#00C49F",
                image: {
                    src: 'jahn.jpg',
                    alt: 'Supermercado Jahn'
                },
            },
            {
                color: "#0088FE",
                image: {
                    src: 'marin.png',
                    alt: 'Supermercado Marin'
                }
<<<<<<< HEAD
            },
            {
                color: "#483D8B",
                image: {
                    src: 'wagner.jpg',
                    alt: 'Supermercado Wagner'
                }
            },
=======
            }            
           
>>>>>>> c3eb43c9d3cac608d6f18b40c0b996697c0f13aa
        ],
        [
            {
                color: "#483D8B",
                image: {
                    src: 'maccari.jpg',
                    alt: 'Maccari'
                }
            },
            {
                color: "#FFBB28",
                image: {
                    src: 'sucesso.png',
                    alt: 'Sucesso das Carnes'
                }
            },
            {
                color: "#0088FE",
                image: {
                    src: 'bertuol.jpg',
                    alt: 'Supermercado Bertuol'
                }
            }
        ],
        [

            {
                color: "#483D8B",
                image: {
                    src: 'wagner.jpg',
                    alt: 'Supermercado Wagner'
                }
            },

            {
                color: "#00C49F",
                image: {
                    src: 'trez.jpg',
                    alt: 'Supermercado Trez'
                },
            },
            {
                color: "#FFBB28",
                image: {
                    src: 'baggio.png',
                    alt: 'Mix Baggio'
                }
            },
            {
                color: "#00C49F",
                image: {
<<<<<<< HEAD
                    src: 'servico.jpg',
                    alt: 'Serviços Oferecidos'
                }
            },
=======
                    src: 'milenium.png',
                    alt: 'Supermercado Milenium'
                },
            }
>>>>>>> c3eb43c9d3cac608d6f18b40c0b996697c0f13aa
        ]
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
            25000
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="text-gray-600 body-font my-6">
            <div className="container px-5 pt-24 mx-auto text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                    PARCEIROS
                </h1>

                <p className="lg:w-2/3 mx-auto leading-relaxed text mb-3">
                    Algumas das empresas que confiam na Somasys.
                </p>
            </div>


            <div className="slideshow">
                <div
                    className="slideshowSlider "
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {clientes.map(cliente =>

                        cliente.map((children, index) => (

                            <div
                                className="w-28 h-32 md:w-96 md:h-96 mx-2 inline-block "
                                key={index}
                                style={{ backgroundColor: children.color }}
                            >
<<<<<<< HEAD
                                <Image
                                    unoptimized={true}
=======
                                <img
                                    alt={children.image.alt}
                                    className="object-fill h-full w-full object-center block"
>>>>>>> c3eb43c9d3cac608d6f18b40c0b996697c0f13aa
                                    src={children.image.src}
                                    alt={children.image.alt}
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                />
                            </div>

                        ))

                    )}
                </div>

                <div className="slideshowDots cursor-pointer">
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
        </div>
    )
}

export default Clients;