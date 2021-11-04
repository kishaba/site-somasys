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
            },            
            {
                color: "#483D8B",
                image: {
                    src: 'wagner.jpg',
                    alt: 'Supermercado Wagner'
                }
            },            
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
            },
            {
                color: "#FFBB28",
                image: {
                    src: 'oniric.png',
                    alt: 'Supermercado Oniric'
                }
            },
        ],
        [
            
            {
                color: "#0088FE",
                image: {
                    src: 'prosom.png',
                    alt: 'Prosom'
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
                color: "#483D8B",
                title: "Serviços Oferecidos",
                image: {
                    src: 'servico.jpg',
                    alt: 'Serviços Oferecidos'
                }
            },  
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
        <div className="text-gray-600 body-font">
            <div className="container px-5 pt-24 mx-auto text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                    PARCEIROS
                </h1>

                <p className="lg:w-2/3 mx-auto leading-relaxed text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
            </div>
            

            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {clientes.map(cliente =>

                        cliente.map((children,index) => (

                            <div
                                className="slide mx-2 inline-block w-full"
                                key={index}
                                style={{ backgroundColor: children.color }}
                            >
                                <img
                                    alt={children.image.alt}
                                    className="object-fill h-full object-center block"
                                    src={children.image.src}
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