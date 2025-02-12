import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";

const posts = [
  {
    id: 1,
    title: "Air Pollution",
    image:
      " https://wdtboomi.wpengine.com/wp-content/uploads/2023/02/boom-re1-1-768x941.webp  ",
    info: "Proin malesuada dolor ac diam congue suscipit. Proina pellentesque tellus. Etiam facilisis lectus arcu diam congue..",
  },
  {
    id: 2,
    title: "Water Pollution",
    image:
      "https://wdtboomi.wpengine.com/wp-content/uploads/2022/12/AdobeStock_369892736@2x-768x941.webp",
    info: " Etiam facilisis lectus arcu diam congue. Proin malesuada dolor ac diam congue suscipit. Proina pellentesque tellus.",
  },
  {
    id: 3,
    title: "Land Pollution",
    image:
      "https://wdtboomi.wpengine.com/wp-content/uploads/2023/02/home-service-image-1-768x941.webp",
    info: " Malesuada proin dolor ac diam congue suscipit. Proina pellentesque tellus. Etiam facilisis lectus arcu diam congue.",
  },
  {
    id: 4,
    title: "Eco System",
    image:
      "https://wdtboomi.wpengine.com/wp-content/uploads/2023/02/boomi-re2-1-768x941.webp",
    info: "Congue proin malesuada dolor ac diam suscipit. Proina pellentesque tellus. Etiam facilisis lectus arcu diam congue",
  },
];

const PostCard = ({ post }) => {
  return (
    <section>
      <article
        style={{
          backgroundImage: `url(${post?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex py-56 relative group transition ease-out delay-100  hover:bg-ghover place-items-baseline  cursor-pointer"
      >
        <div className="h-full w-full bg-[#294145] opacity-70 group-hover:block hidden absolute top-0"></div>
        <div className="py-4 text-white absolute  bottom-1 w-full px-4 ">
          <h1 className="text-3xl  break-all text-white group-hover:text-main4 font-medium">
            {post.title}
          </h1>
          <p className=" f py-2 hidden group-hover:block  text-white leading-relaxed  ">
            {post.info}
          </p>
          <button className="border-b-4 px-1 hidden group-hover:block mt-4 font">
            READ MORE
          </button>
        </div>
      </article>
    </section>
  );
};

export default function Content3() {
  return (
    <div id="ow" className="py-2 px-">
      <div className="mx-auto max-w-full">
        <div className="py-10 mx-auto text-center max-w-5xl">
          <h1 className="text-6xl text-main4 font-medium">
            Pollution Free <span className="text-[#294145]">Earth</span>
          </h1>
          <p className="max-w-3xl tracking-wide text-lg py-5 m-auto">
          Reducing emissions and protecting natural resources are crucial steps in fighting global warming and ensuring a sustainable future for all.
          </p>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="lg:grid md:grid grid-cols-4 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
