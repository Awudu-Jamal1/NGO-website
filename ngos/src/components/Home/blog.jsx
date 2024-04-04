import Carousel from "./carousel";

function Blog() {
    return ( <>
    <div className="py-5 bg-text1 text-main3">
    <div className="text-center py-10">
        {/* <h3 className="text-lg font-bold sm:text-3xl">Blog</h3> */}
        <h1 className="text-4xl font-semibold sm:text-3xl">NEWS & UPADATES </h1>
    </div>
    <div><Carousel/>

    </div>

    </div>
   </> );
}

export default Blog;