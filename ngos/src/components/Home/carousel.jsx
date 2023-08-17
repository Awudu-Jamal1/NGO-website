import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const car =[{
    id:1,
    slide:'Slide 1'
},{
    id:2,
    slide:'Slide 2'
},{
    id:3,
    slide:'Slide 3'
},{
    id:4,
    slide:'Slide 4'
},{
    id:5,
    slide:'Slide 5'
},]
 function Carousel ()  {


  return (
    <div >
  <Swiper

        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-16"
      >
        {car.map((cars)=>(
            <SwiperSlide className='py-48 gap-1 bg-white text-main text-center text-lg font-bold'  key={cars.id}>{cars.slide}</SwiperSlide>
        ))}
      </Swiper>

    </div>

  );
}

export default Carousel  ;