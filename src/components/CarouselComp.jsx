import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {
  Carousel,
  initTWE,
} from "tw-elements";
const CarouselComp = ({ images }) => {
  initTWE({ Carousel });
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
//     <div className="relative mx-auto">
//       <div
//         id="carouselExampleSlidesOnly"
//         className="relative"
//         data-twe-carousel-init
//         data-twe-ride="carousel">
//         <div
//           className="relative h-[300px] rounded-xl  overflow-hidden after:clear-both after:block after:content-[''] "></div>

//         {images.map((content, index) => (
//           // <div
//           //   key={index}
//           //   className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${
//           //     index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
//           //   }`}
//           // >
//           <div
//             key={index}
//             className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none
//        data-twe-carousel-item
//       ${index === currentIndex ? 'data-twe-carousel-active' : index < currentIndex ? ' hidden' : 'hidden'}`}>
//             <div className="absolute z-10 right-10 top-[45%] w-[50%]">
//               <p className="font-bold text-3xl text-white">{content.title}</p>
//             </div>
//             <img
//               src={content.img}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover object-center z-0"
//             />
//           </div>
//         ))}
//       </div>
//       <button
//   onClick={prevSlide}
//   className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full z-20 hover:bg-opacity-75"
// >
//   <MdKeyboardArrowLeft size={30} />
// </button>

// <button
//   onClick={nextSlide}
//   className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full z-20 hover:bg-opacity-75"
// >
//   <MdKeyboardArrowRight size={30} />
// </button>
//       {/* <button
//     onClick={prevSlide}
//                 className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//                 type="button"
//                 data-twe-target="#carouselExampleControls"
//                 data-twe-slide="prev">
//                 <MdKeyboardArrowLeft/>
                
//             </button> */}
//       {/* <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 "
//       >
//         <MdKeyboardArrowRight />
//       </button> */}
//     </div>
<div className="relative mx-auto max-w-[90%] sm:max-w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
  <div
    id="carouselExampleSlidesOnly"
    className="relative h-full"
    data-twe-carousel-init
    data-twe-ride="carousel"
  >
    {images.map((content, index) => (
       <div
         key={index}
         className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${
           index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
         }`}
       >
        <img
          src={content.img}
          alt={`Slide ${index}`}
          className="w-full h-full object-cover object-left-top rounded"
        />
        <div className="absolute z-10 right-6 top-[30%] sm:top-[45%] w-[50%] sm:w-[50%] p-2">
          <p className="font-bold text-sm sm:text-2xl md:text-3xl lg:text-4xl text-white text-center break-words">
            {content.title}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Prev Button */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white p-2 sm:p-3 z-20 hover:bg-opacity-75"
  >
    <MdKeyboardArrowLeft size={24} />
  </button>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white p-2 sm:p-3 z-20 hover:bg-opacity-75"
  >
    <MdKeyboardArrowRight size={24} />
  </button>
</div>



  );
};

export default CarouselComp;
