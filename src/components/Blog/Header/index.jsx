import Image from 'next/image';
import Link from 'next/link';
import LogoSomasys from '../../../../public/logo.png';

const BlogHeader = () => {
    return (
        <div className='body-font'>
            <div className='relative top-0 pt-[17%] overflow-hidden'>
                <div className={`
            absolute inset-0 object-cover object-top w-screen
            h-36 filter blur bg-gradient-to-r from-green-soma to-blue-soma
          `} />
            </div>
            <div className='mt-[-10%] md:mt-[-5%] lg:mt-[-14%] w-36 lg:w-96 mx-auto'>
                <div className='relative pt-[56.25%] rounded-2xl'>
                    <div className="absolute inset-0 cursor-pointer">
                        <Link href="/" passHref>
                            <Image
                                unoptimized={true}
                                src={LogoSomasys}
                                alt="Somasys Logo"
                                sizes="100%"
                                layout="fill"
                                objectFit="contain"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader;