import Content3 from "./content3";
import Member from "./members";

function Content2() {
    return (  <>
    <div id="about" className="mx-auto max-w-4xl py-10 ">

<div className="text-center py-10">
  <h1 className="text-4xl font-semibold tracking-tight text-main3 sm:text-3xl">
    About Us
  </h1>
  <p className="mt-6 text-2xl  leading-8 text-text1">
    To inspire millions of individuals around the globe to come up with innovative ideas and solutions to protect and part of the solution.
  </p>


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