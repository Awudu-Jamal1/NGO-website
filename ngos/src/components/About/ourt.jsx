import Member from "../Home/members";
import imgz from "../../assets/images/abouttop.jpg";

function OurTeam() {
  return (
    <div>
      <div>
        <div className="h-[400px]  lg:block md:block relative ">
          <img
            className="absolute h-full w-full object-cover object-center"
            src={imgz}
            alt="nature image"
          />
          <div className="absolute inset-0 h-full w-full "></div>
          <div className="absolute z-10 text-white top-20  w-2/4  left-[400px]">
            <h1 className="text-6xl tracking-normal  text-white text-center py-5 font-bold leading-tight">
              OUR TEAM
            </h1>
            <p className="text-xl text-center tracking-normal leading-normal text-white font-semibold capitalize">
              <span className="text-main4">Globally Green &gt; </span>
              <span className=" text-white">Our Team</span>
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-7xl py-20 ">
        <div className="text-center max-w-4xl m-auto py-12">
          <h6 className="text-base font-medium text-main4 tracking-wide leading-relaxed py-1">
            OUR TEAM
          </h6>
          <h1
            className="text-5xl font-bold  tracking leading-snug py-1"
            style={{ fontFamily: "Encode Sans Condensed, serif" }}
          >
            Meet Our Dedicated Environmental Advocates and Experts
          </h1>
        </div>
        <div className=" pt-8">
          <Member />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
