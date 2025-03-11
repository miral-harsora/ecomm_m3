// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const MyCarousel = () => {
//   return (
//     <Carousel  autoPlay infiniteLoop>
//       <div>
//         <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" alt="Slide 1" />
//         <p className="legend">First slide label</p>
//       </div>
//       <div>
//         <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" alt="Slide 2" />
//         <p className="legend">Second slide label</p>
//       </div>
//       <div>
//         <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" alt="Slide 3" />
//         <p className="legend">Third slide label</p>
//       </div>
//     </Carousel>
//   );
// };

// export default MyCarousel;
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

const MyCarousel = () => {
  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      showArrows={false}
      showThumbs={false} // Disable thumbnails
      showStatus={false} // Hide slide index (e.g., "1/3")
      interval={2000} // Auto-slide every 3 seconds
     
    >
      <div>
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" alt="Slide 1" />
        <p className="legend">First slide label</p>
      </div>
      <div>
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" alt="Slide 2" />
        <p className="legend">Second slide label</p>
      </div>
      <div>
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" alt="Slide 3" />
        <p className="legend">Third slide label</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
