import Content3 from "./content3";
import Member from "./members";
import EventArea from "./partners";
import Vision from "./vision";

function Content2() {
    return (  <>
    

 

<div>

</div>
<div className="  py-10">
    <Content3/>
</div>
<div style={{
      backgroundImage: `url(https://wdtboomi.wpengine.com/wp-content/uploads/2022/12/Path-12687@2x.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="max-w-6xl m-auto py-20"><EventArea/></div>
    </div>

<div className="max-w-7xl mx-auto text-center py-28">
{/* <h1 className="text-2xl max-w- font-semibold leading-8 py-8 tracking-tight text-main3 sm:text-3xl">
     Our Team
  </h1> */}
  <div>

  <Vision/> 


  </div>

</div> 

    </>);
}

export default Content2;