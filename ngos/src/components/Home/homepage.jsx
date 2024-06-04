import Blog from "./blog";
import Content from "./content";
import Content2 from "./content2";
import { JoinUs } from "./join";
import Partners from "./partners";
import Trys from "./trys";

function Homepage() {
    return ( <>
    <div><Content/>
    <Content2/>
    {/* <Trys/> */}
    {/* <Blog/> */}
    <Partners/>
    <JoinUs/>

    </div>

   </> );
}

export default Homepage;