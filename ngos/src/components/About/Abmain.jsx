import Member from "../Home/members";
import { Approach } from "./approach";
import { Founder } from "./founder";

export const About = () => {
  return (
    <div>
      <div className="mx-auto max-w-5xl pb-16 py-6 text-main3">
        <div className="bg-[#90a583]  py-10 pt-8 lg:px-16">
        <div className="lg:w-[40em] px-9 py-8 text-[#fff]">
          <div className="text-7xl font-bold py-5 ">Who We Are</div>
          <div className=" text-2xl py-5 leading-8 tracking-wider">
            We are a team of solution driven individuals geared towards
            environmental advocacy and new innovations to help create the world
            we need. Founded in 2020, we have engaged in community-based
            projects as well as educated and inspired to take action. With key
            interest in cultural collaboration, we look forward to creating
            a more sustainable environment for all
          </div>
          <div className="">
            <button className="text-[#fff] underline text-[0.85em] px-10 py-5 bg-main">SEE OUR WORK</button>
          </div>
          
        </div>
        <div>
        <div className="text-center  grid grid-cols-1 lg:grid-cols-3 ">
            
            <div></div>
                        <div className="grid  h-[43em] col-span-2  lg:grid-rows-3 grid-flow-col gap-4">
              <div className="row-start-2 img1 border opacity-70 row-span-2 ..."></div>
              <div className="row-end-3 border img2 row-span-2 opacity-70  ...."></div>
              {/* <div className="row-start-1 row-end-4 border ...">03</div> */}
            </div>
                      </div>
        </div>
        </div>
        
        <div>
            <Approach/>
        </div>
        <div>
          <Founder/>
        </div>
      </div>
    </div>
  );
};
