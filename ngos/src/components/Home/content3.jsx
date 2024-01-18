import pic1 from "../../assets/images/pic1.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic2 from "../../assets/images/pic2.jpg";
const posts = [
  {
    id: 1,
    title: "Work One",
    image: pic1,
  },
  {
    id: 2,
    title: "Work Two",
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
  {
    id: 5,
    title: "Work Three",
    image: pic3,
  },
];

export default function Content3() {
  return (
    <div className="bg-white py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16  border-gray-200   lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {posts.map((post) => (
            <article
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: " no-repeat",
              }}
              key={post.id}
              className="flex py-48 text-center bg-main relative  max-w-xl  opacity-70 transition ease-out delay-300 hover:opacity-90
               hover:bg-ghover flex-col items-center justify-between"
            >
              <h1 className="text-2xl font-bold text-white">{post.title}</h1>
              {/* <div className="absolute style  border"><img style={{height:"15em",top:"1"}} src={post.image} alt="" /></div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
