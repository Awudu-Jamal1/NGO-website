import homeGreen from "../../assets/images/newBack.png";
function HomeInfo() {
  return (
    <div className="relative">
      <div>
        <img src={homeGreen} alt="" />
      </div>
      <div className="absolute max-w-xl  left-20 z-10 top-0 md:top-10 lg:top-44 m-auto  ">
        <div className="px-5 py-8  text-center md:text-left lg:text-left">
          <div className="lg:text-lg  text-base font-medium text-main4 tracking-wide leading-relaxed py-2">
            NATURAL ENVIRONMENT
          </div>
          <div>
            <div className="   leading-relaxed">
              <h1
                className="lg:text-6xl md:text-4xl text-2xl text-white  font-bold leading-tight py-2"
                style={{ fontFamily: "Encode Sans Condensed, serif" }}
              >
                Leading the way to a greener future
              </h1>
            </div>
            <p className="lg:text-base md:text-base text-xs leading-loose tracking-wide text-[#fff] py-3">
              Global warming is the long-term rise in Earth's average
              temperature caused by human activities, mainly the release of
              greenhouse gases like carbon dioxide (CO₂), methane (CH₄), and
              nitrous oxide (N₂O). These gases trap heat, creating a "greenhouse
              effect" that warms the planet.
            </p>
            <div className="pt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInfo;
