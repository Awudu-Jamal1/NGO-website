export const JoinUs = () => {
  return (
    <div className="flex bg-[] py-32 place-items-center place-content-center ">
      <div className=" py-3 px-10 text-center">
        <h2 className="text-6xl border-b-8 border-b-main4 lg:leading-3 text-center font-semibold text-[#294145] py-3 px-2">
          Subscribe to Our Newsletters
        </h2>
        <p className="max-w-lg text-center m-auto py-16">
          Subscribe to stay updated on sustainability, environmental tips, and
          impactful initiatives for a greener future.
        </p>
        <div className="flex rounded-full border  border-[#294145] justify-between max-w-2xl m-auto">
          <div className="px-2">
            <input
              className="px-3 py-3 rounded-full  w-72"
              type="text"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <button
              className="px-4 py-3 h-full w-36
                     rounded-full bg-[#294145] text-[#fff] border"
            >
              Submit
            </button>
          </div>
        </div>
        {/* <p className="max-w-[30em] px-2 py-3 ">
                When you sign up, you’ll become a member of <span className="text-main3">Globally Green </span>  Network. We will keep you informed with the latest alerts and progress reports.
                </p> */}
      </div>
    </div>
  );
};
