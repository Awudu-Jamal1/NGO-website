import pic1 from "../../assets/images/pic1.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic2 from "../../assets/images/pic2.jpg";
const posts = [
  {
    id: 1,
    title: "Organised project to plant trees",
    image: pic1,
  },
  {
    id: 2,
    title: "Educated kids in This school",
    image: pic2,
  },
  {
    id: 3,
    title: "Work Three",
    image: pic3,
  },
  {
    id: 4,
    title: "Work Two",
    image: pic2,
  },
];

export default function Content3() {
  return (
    <div id="ow" className="py-2">
      <div className="mx-auto max-w-full  ">
        <div className="mx-auto grid max-w-full  grid-cols-1 gap-x-1 gap-y-3     lg:mx-0 lg:max-w-full sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: " no-repeat",
              }}
              key={post.id}
              className="flex py-28 relative bg-main relative  lg:max-w-xl  opacity-90 transition ease-out delay-100 hover:scale-90
               hover:bg-ghover items-end border self-end"
            >
              <div className="absolute pl-3 w-full bottom-0 py-4 listz  ">
                <h1 className="text-[0.8em] font-bold text-white">
                  {post.title}
                </h1>
              </div>

              {/* <div className="absolute1 style  border"><img style={{height:"15em",top:"1"}} src={post.image} alt="" /></div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
