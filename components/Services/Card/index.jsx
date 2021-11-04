const Card = ({ children }) => {
    return (
        <div className='flex-grow flex md:text-left text-center '>
            <div className='flip-card mb-8 mx-auto overflow-hidden rounded-lg'>
                <div className='flip-card-inner h-full text-center'>
                    <div className='flip-card-front bg-card-front absolute w-full h-full'>
                        <img className='object-cover'
                            src={children.image.src}
                            alt={children.image.alt}
                        />
                        <h1 className='text-white text-xl title-font font-medium mb-3'>
                            {children.title}
                        </h1>
                    </div>
                    <div
                        className='flip-card-back z-0 absolute w-full h-full'
                        style={children.style}
                    >
                        <div className='px-4 py-2 bg-black h-full z-40 opacity-80'>
                            <h1 className='text-white text-4xl title-font font-medium mb-3 '>
                                {children.title}
                            </h1>
                            <CardItem>{children.lista}</CardItem>
                        </div>
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
                {children.map((item,indice) => {
                    return <li key={indice}>{item}</li>
                })}
            </ul>
        </div>
    );
};


export default Card;