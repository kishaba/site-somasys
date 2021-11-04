import { useEffect, useRef } from 'react';
// const Hero = () => {
//   const videoRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       videoRef.current.play();
//     }, 1000);
//   }, []);
//   return (
//     <div
//       className='flex flex-col items-center justify-center w-full flex-1 px-20
//         bg-gradient-to-l from-green-soma to-blue-soma h-screen flex-1 overflow-y-auto p-5'
//     >
//       <div className='text-gray-600 body-font'>
//         <div className=' container mx-auto flex px-5 py-24 md:flex-row'>
//           <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
//             <div className='h-screen w-full'>
//               <video ref={videoRef} loop muted>
//                 <source src='/videos/cidade.mp4' type='video/mp4' />
//               </video>
//             </div>
//             <img
//               className='object-contain object-center rounded abosulute'
//               alt='hero'
//               src='logo-branco-assessoria.png'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Hero = ({videoRef}) => {
  // const videoRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play();
  //   }, 0);
  // }, []);

  return (

      <div
        className='flex justify-center items-center
        bg-gradient-to-l from-green-soma to-blue-soma '
      >
        <div className='flex '>
          <video loop muted autoPlay>
            <source src='/videos/cidade.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='absolute'>
          <img
            className='object-contain object-center'
            alt='hero'
            src='logo-branco-assessoria.png'
          />
        </div>

    </div>
  );
};


// export async function getStaticProps() {
//   const videoRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       videoRef.current.play();
//     }, 0);
//   }, []);

//   return {
//     props: {
//       videoRef,
//     },
//   }
// }

export default Hero;
