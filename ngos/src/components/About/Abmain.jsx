import Member from "../Home/members";
import AboutTop from "./aboutTop";
import AboutUs from "./AboutUs";
import { Approach } from "./approach";
import { Founder } from "./founder";
import OurImpact from "./impact";
import Testimonials from "./testimonial";

export const About = () => {
  return (
    <div>
      <div>
        <div className="hidden lg:block">
          <AboutTop />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <OurImpact />
        </div>
        <div>
          <Approach />
        </div>
        <div className="relative">
          <Testimonials />
        </div>
        <div>
          <Founder/>
        </div>
      </div>
    </div>
  );
};
