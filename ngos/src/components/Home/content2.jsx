import Content3 from "./content3";
import Member from "./members";

function Content2() {
    return (  <>
    <div className="mx-auto max-w-4xl py-10 ">

<div className="text-right py-10">
  <h1 className="text-4xl font-bold tracking-tight text-main sm:text-5xl">
    What We Do
  </h1>
  <p className="mt-6 text-2xl font-bold leading-8 text-text1">
    To inspire millions of individuals around the globe to come up with innovative ideas and solutions to protect and part of the solution.
  </p>


</div>
<div className="text-left">
<h1 className="text-4xl font-bold tracking-tight pt-8 text-main sm:text-5xl">
    Vision
  </h1>
  <p className="mt-6 text-2xl font-bold leading-8 text-text1">
   Through cultural collaboration and education, we seek to create a world
   where nature would be conserved and our environment protected
  </p>
</div>

</div>

<div className="mx-auto max-w-6xl text-center py-4">
<h1 className="text-2xl max-w- font-bold leading-8 py-8 tracking-tight text-main sm:text-3xl">
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