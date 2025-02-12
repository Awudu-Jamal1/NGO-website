import img1 from "../../assets/images/activity.jpg"
export  const Approach = () => {
  return (
    <div className="  relative grid md:grid-cols-2 lg:grid-cols-2  text-white  bg-[#f7f7f7]  justify-center   gap-20  my-10">
      <div className="">
        <img
        className="h-full"
          src="https://ecozone-wp.laralink.com/wp-content/uploads/2024/10/funfact_bg.jpg"
          alt=""
        />
      </div>
      <div className="px-5 py-8  text-center md:text-left lg:text-left">
        <div className="text-lg font-medium text-main4 tracking-wide leading-relaxed py-2">
          Our Approach
        </div>
        <div>
          <div className="   leading-relaxed">
            <h1 className="text-4xl  font-bold leading-tight py-2" style={{  fontFamily: "Encode Sans Condensed, serif" }}>
            Empowering Vulnerable Communities: Promoting Sustainability and Reducing Climate Vulnerability
            </h1>
          </div>
          <p className="text-base leading-loose tracking-wide text-[#555555] py-3">
          We collaborate closely with local communities to lessen the
            vulnerability of groups susceptible to the effects of the climate,
            such as children, youth, and women, who have a relatively lower
            capacity for adaptation because of social and structural
            inequalities. We seek to become an extensive organization that
            guides individual conscious choices in promoting sustainability and
            reducing the vulnerability of communities to natural and
            socio-economic risks.

          </p>
          <div className="pt-10">
            
          </div>
        </div>
      </div>
    </div>
  );
};
