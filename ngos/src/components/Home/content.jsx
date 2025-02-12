function Content() {
  return (
    <div id="home" className="py-20">
      <div className="grid md lg:grid-cols-2 gap-10">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <div className="row-span-3 hidden md:block lg:block">
            <img
              className="h-[600px]  w-[400px] overflow absolute md:-left-28 lg:-left-44"
              src="https://wdtboomi.wpengine.com/wp-content/uploads/2023/02/home-image-1.webp"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <img
              className="max-h-64"
              src="https://wdtboomi.wpengine.com/wp-content/uploads/2023/02/home-image-2.webp"
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-2 row-start-2">
            <img
              className=" h-[550px] w-[450px] "
              src="https://wdtboomi.wpengine.com/wp-content/uploads/2023/02/home-image-3.webp"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 py-8">
          <h1 className="text-6xl text-[#294145]  leading-tight font-bold max-w-3xl">
            I do believe in protecting the environment. I'm an Earth warrior
          </h1>
          <p className="py-5 text-xl font-semibold tracking-wide">
            Trust Warrior
          </p>
          <p className="text-lg leading-loose tracking-wide ">
            As an Earth warrior, I believe in the urgent need to protect our
            planet from the impacts of global warming. Human activities,
            especially the burning of fossil fuels, release harmful greenhouse
            gases that trap heat, causing the Earth's temperature to rise. This
            warming leads to extreme weather, rising sea levels, and devastating
            effects on ecosystems. It’s crucial that we take immediate
            action—reducing emissions, using clean energy, and preserving
            nature—to safeguard a sustainable future for all. The time to act is
            now.
          </p>
          <div className="py-5">
            <button className="py-3 px-8 text-white bg-[#86ba5e] rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
