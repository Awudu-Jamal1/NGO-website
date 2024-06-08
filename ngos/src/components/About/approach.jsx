import img1 from "../../assets/images/activity.jpg"
export  const Approach = () => {
  return (
    <div className="text-main3 py-16">
      <div className="text-7xl font-bold px-6  py-8 ">
        <h1 className=" w-full lg:w-[1em]">Our Approach. </h1></div>
      <div>
        <div className="  grid py-3 grid-cols-1 lg:grid-cols-3 ">
          <div className="px-3 leading-7 ">
            We collaborate closely with local communities to lessen the
            vulnerability of groups susceptible to the effects of the climate,
            such as children, youth, and women, who have a relatively lower
            capacity for adaptation because of social and structural
            inequalities. We seek to become an extensive organization that
            guides individual conscious choices in promoting sustainability and
            reducing the vulnerability of communities to natural and
            socio-economic risks.
            <div className="py-8 px-3" >
                <button className="text-[#fff] underline text-[0.85em] px-10 py-5 bg-main" >Work With Us</button>
            </div>
          </div>
          <div className="grid  h-[35em] col-span-2  lg:grid-rows-3 grid-flow-col gap-4">
              <div className="row-start-2 border row-span-2 img3 opacity-70 ..."></div>
              <div className="row-end-3 border row-span-2 img4 opacity-70 ...."></div>
              {/* <div className="row-start-1 row-end-4 border ...">03</div> */}
            </div>
        </div>
      </div>
    </div>
  );
};
