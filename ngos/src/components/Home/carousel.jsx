import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import activity from "../../assets/images/activity.jpg"
import activity2 from "../../assets/images/news2.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const car =[{
    id:1,
    slide:'Slide 1',
    img:activity
},{
    id:2,
    slide:'Slide 2',
    img:activity
},{
    id:3,
    slide:'Slide 3',
    img:activity2
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
        className="mySwiper py-16 "
      >
        {car.map((cars)=>(
            <SwiperSlide className='py-48 relative gap-1 bg-main opacity-70 hover:opacity-90  border-yellow text-white transition ease-out delay-300 text-center text-lg font-bold'
            style={{ backgroundImage: `url(${cars.img})` ,    backgroundSize: 'cover',
            backgroundPosition:'center',
            backgroundRepeat:' no-repeat' }}
            key={cars.id}>
               <div className="style ">
                {cars.slide}
              </div>
            </SwiperSlide>
        ))}
      </Swiper>

    </div>

  );
}

export default Carousel  ;