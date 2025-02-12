import imgz from "../../assets/images/abouttop.jpg";
function AboutTop() {
  return (
    <>
      <div>
        <div className="h-[400px]  lg:block md:block relative ">
          <img
            className="absolute h-full w-full object-cover object-center"
            src={imgz}
            alt="nature image"
          />
          <div className="absolute inset-0 h-full w-full "></div>
          <div className="absolute z-10 text-white top-20  lg:w-2/4  left-[400px]">
            <h1 className="text-6xl tracking-normal  text-white text-center py-5 font-bold leading-tight">
              ABOUT US
            </h1>
            <p className="text-xl text-center tracking-normal leading-normal text-white font-semibold capitalize">
              <span className="text-main4">Globally Green &gt; </span>
              <span className=" text-white">About Us</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTop;
