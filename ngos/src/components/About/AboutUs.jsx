import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import green from "../../assets/images/aboutGreen.png"
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
    return ( <>
    <div className=" py-10">
        <div className="max-w-7xl m-auto md:grid lg:grid grid-cols-2 gap-16">
        <div className="">
            <img src={green} alt="" className="h-full" />
        </div>
            <div className=" px-5 py-8">
                <div>
                <h6 className="text-lg font-medium text-main4 tracking-wide leading-relaxed py-2">About Us</h6>
                <h1 className="text-6xl font-bold leading-tight py-2" style={{  fontFamily: "Encode Sans Condensed, serif" }}>
                Cultural Collaboration for Environmental Change and Innovation
                </h1>
                <p className="text-base leading-loose tracking-wide text-[#555555] py-3">We are a team of solution driven individuals geared towards
            environmental advocacy and new innovations to help create the world
            we need. Founded in 2020, we have engaged in community-based
            projects as well as educated and inspired to take action. With key
            interest in cultural collaboration, we look forward to creating
            a more sustainable environment for all</p>
                </div>
                <div className="py-5">
                    <div className="flex gap-5 ">
                        <div className="pt-1.5 place-items-center"><FontAwesomeIcon className="text-xl text-main4"   icon={faCheck} style={{ color: "#86b85e" }}  /></div>
                        <div ><h1 className="text-2xl font-semibold" style={{  fontFamily: "Encode Sans Condensed, serif" }}>Our Mission</h1>
                        <p className="text-base leading-loose text-[#555555] py-4"> Global Green focuses on integrating the shared interests of
                people, places and planet through partnerships and catalytic
                impact. We are on a 10 year mission to lead a global response to
                keep us within safe planetary boundaries</p></div>
                    </div>
                    <div className="flex gap-5 pt-5 ">
                        <div className="pt-1.5 place-items-center"><FontAwesomeIcon className="text-xl text-main4"   icon={faCheck} style={{ color: "#86b85e" }}  /></div>
                        <div ><h1 className="text-2xl font-semibold" style={{  fontFamily: "Encode Sans Condensed, serif" }}>
  Our Vision
</h1>
                        <p className="text-base leading-loose text-[#555555] py-4">Global Green sees an abundant future for all people, places and
                planet. We envision a planet where there is no conflict between
                our economic needs and sustainable systems of life.</p></div>
                    </div>


                </div>
            </div>
            
        </div>
    </div>
    </> );
}

export default AboutUs;