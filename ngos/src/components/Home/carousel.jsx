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
},]
 function Carousel ()  {


  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8' >
   <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16  border-gray-200   lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {car.map((post) => (
            <article
              style={{
                backgroundImage: `url(${post.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: " no-repeat",
              }}
              key={post.id}
              className="flex py-32 text-center bg-main relative  max-w-xl  opacity-90 transition ease-out delay-300 hover:opacity-100
               hover:bg-ghover flex-col items-center justify-between"
            >
              <h1 className="text-2xl font-bold text-white">{post.slide}</h1>
              {/* <div className="absolute style  border"><img style={{height:"15em",top:"1"}} src={post.image} alt="" /></div> */}
            </article>
          ))}
        </div>
    </div>

  );
}

export default Carousel  ;