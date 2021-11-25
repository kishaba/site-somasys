import Image from 'next/image';
import { useEffect, useState } from "react"

const Card = ({ rotation = 180, timing = 8000, children }) => {
    const [isPassed, setIsPassed] = useState(false)

    const inner = {
        transform: isPassed
            ? `rotateY(${rotation}deg)`
            : '',
        transition: `transform 0.8s`
    }

    useEffect(() => {
        if (!isPassed) {
            return;
        }
        const timeoutId = window.setTimeout(() => {
            setIsPassed(false);
        }, timing);
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isPassed, timing]);

    const trigger = () => {
        setIsPassed(true);
    };



    // const [isMobile, setIsMobile] = useState(false)
    const back = {
        transform: 'rotateY(180deg)',
        background: children.style.backgroundImage,
        backgroundSize: children.style.backgroundSize
    }

    return (
        <div className='flex-grow flex md:text-left text-center'>
            <div className='card mb-8 mx-auto overflow-hidden rounded-lg'>
                <div className='inner h-full text-center hidden lg:block'
                    onMouseEnter={trigger}
                    style={inner}>

                    {/* FRENTE */}
                    <div className='front bg-card-front absolute w-full h-full'>
                        <Image
                            unoptimized={true}
                            src={children.image.src}
                            alt={children.image.alt}
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />                 
                        <h1 className='text-white text-xl title-font font-medium mb-3'>
                            {children.title}
                        </h1>
                    </div>

                    {/* VERSO */}
                    <div
                        className='back z-0 absolute w-full h-full'
                        style={back}
                    >
                        <div className='px-4 py-2 bg-black h-full z-40 opacity-80'>
                            <h1 className='text-white text-4xl title-font font-medium mb-3'>
                                {children.title}
                            </h1>
                            <CardItem>{children.lista}</CardItem>
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <div
                    className='h-full text-center'
                    style={children.style}
                >
                    <div className='px-4 py-2 bg-black h-full z-40 opacity-80'>
                        <h1 className='text-white text-4xl title-font font-medium mb-3'>
                            {children.title}
                        </h1>
                        <CardItem>{children.lista}</CardItem>
                    </div>
                </div>

            </div>
        </div>
    )
}

const CardItem = ({ children }) => {
    return (
        <div className='leading-relaxed text-base text-white'>
            <ul className='list-none'>
                {children.map((item, indice) => {
                    return <li key={indice}>{item}</li>
                })}
            </ul>
        </div>
    );
};


export default Card;