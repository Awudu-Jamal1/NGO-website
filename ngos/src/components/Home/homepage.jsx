import Blog from "./blog";
import Carousel from "./carousel";
import Content from "./content";
import Content2 from "./content2";
import HomeInfo from "./homeInfo";
import { JoinUs } from "./join";
import Partners from "./partners";
import Trys from "./trys";
import Volunteeromment from "./Voluteer";

function Homepage() {
    return ( <>
    <div>
      <div><HomeInfo/></div> 
    {/* <Carousel/> */}
    <Content/>
    <Content2/>
    {/* <Trys/> */}
    {/* <Blog/> */}
    <Volunteeromment/>
    <JoinUs/>

    </div>

   </> );
}

export default Homepage;