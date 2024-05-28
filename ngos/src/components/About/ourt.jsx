import Member from "../Home/members";

function OurTeam() {
    return ( <div>
<div className="mx-auto max-w-5xl ">
          <div className="w-full lg:w-[30em] lg:text-left  px-9 py-8 pt-16 text-center">
            <div className="text-7xl font-bold py-5 text-main3">
              Meet the Team
              {/* <p className="bg-main3 w-[2em] h-[0.15em] mt-1"></p> */}
            </div>
            <p className=" text-2xl py-2 leading-8 tracking-wider">
              The innovative thinkers leading the way for environmentally sound
              solutions in Africa and the rest of the world.
            </p>
          </div>
          <div className="text-center pt-8">
            <Member />
          </div>
        </div>

    </div> );
}

export default OurTeam;