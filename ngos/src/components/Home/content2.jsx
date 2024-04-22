import Content3 from "./content3";
import Member from "./members";

function Content2() {
    return (  <>
    <div id="about" className="mx-auto max-w-4xl py-10 ">

<div className="text-center py-5">
  <h1 className="text-4xl font-semibold tracking-tight text-main3 sm:text-3xl">
    About Us
  </h1>
  <p className="mt-6 text-2xl  leading-8 text-text1">
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus numquam voluptatibus, ratione perferendis aspernatur ab molestias at saepe vel dolorum vero voluptates perspiciatis impedit. </p>


</div>


</div>

<div className="mx-auto max-w-4xl text-center py-4">
<h1 className="text-2xl max-w- font-semibold leading-8 py-8 tracking-tight text-main3 sm:text-3xl">
     Our Team
  </h1>
  <div>

 <Member/>


  </div>

</div>


<div>

</div>
<div>
    <Content3/>
</div>
    </>);
}

export default Content2;