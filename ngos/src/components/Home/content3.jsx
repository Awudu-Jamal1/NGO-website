import pic1 from "../../assets/images/pic1.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic2 from "../../assets/images/pic2.jpg";
const posts = [
  {
    id: 1,
    title: "Climate Education",
    image: pic1,
    info:"Read about the exciting initiatives dedicated to advancing solutions for climate change to help the people, places, and planet in need."
  },
  {
    id: 2,
    title: "Tree Planting",
    image: pic2,
    info:"Read about the exciting initiatives dedicated to advancing solutions for climate change to help the people, places, and planet in need."
 
    
  },
  {
    id: 3,
    title: "Workshops",
    image: pic3,
    info:"Read about the exciting initiatives dedicated to advancing solutions for climate change to help the people, places, and planet in need."
 
  },
  // {
  //   id: 4,
  //   title: "Work Two",
  //   image: pic2,
  // },
];

export default function Content3() {
  return (
    <div id="ow" className="py-2 px-5">
      <div className="mx-auto max-w-full  ">
        <div className="py-10 mx-auto max-w-5xl">
          <h1 className="text-2xl font-bold text-main3">We are helping people, places 
          and the planet through the following programs:</h1>
        </div>
        <div className="mx-auto grid max-w-70  grid-cols-1 gap-x-24 gap-y-3  
           lg:mx-0 lg:max-w-70 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <section key={i}>
            <article
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: " no-repeat",
              }}
              key={post.id}
              className="flex py-24 relative bg-main relative text-center   lg:max-w-xl 
              opacity-90 transition ease-out delay-100 hover:scale-90
               hover:bg-ghover justify-center cursor-pointer"
            >
              <div className=" py-4 listz text ">
                <h1 className="text-2xl  break-all tracking-wide font-bold text-white">
                  {post.title}
                </h1>
              </div>

              {/* <div className="absolute1 style  border"><img style={{height:"15em",top:"1"}} src={post.image} alt="" /></div> */}
            </article>
            <p className="text-center text-main3 font-semibold py-2 leading-6  px-10">
              {post.info}
            </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
