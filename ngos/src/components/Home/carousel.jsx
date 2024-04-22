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
}
// ,{
//     id:4,
//     slide:'Slide 4'
// }
,]
 function Carousel ()  {


  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8' >
   <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16  border-gray-200   lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {car.map((post) => (
            <article className='shadow-md transition ease-out delay-100 hover:shadow-xl' key={post.id}>
              <div style={{
                backgroundImage: `url(${post.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: " no-repeat",
              }}
              key={post.id}
              className="flex py-56 text-center bg-main relative  max-w-xl  opacity-90 
                flex-col items-center justify-between"
            >
              {/* <h1 className="text-2xl font-semibold text-main3">{post.slide}</h1> */}
              {/* <div className="absolute style  border"><img style={{height:"15em",top:"1"}} src={post.image} alt="" /></div> */}
            </div>
            <div className='pt-3 py-28 px-4'>
              <div className='text-main3 text-xl font-semibold tracking-wide'> This is The Topic</div>
              <div className='text-[0.8em] py-2 text-text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus obcaecati expedita, maiore</div>
            </div>

              </article>
          ))}
        </div>
    </div>

  );
}

export default Carousel  ;