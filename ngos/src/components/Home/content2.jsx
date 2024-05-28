import Content3 from "./content3";
import Member from "./members";

function Content2() {
    return (  <>
    <div id="about" className="mx-auto max-w-4xl py-10 ">

<div className=" py-5">
  <h1 className="text-4xl py-5 text-center font-semibold tracking-tight text-main3 sm:text-3xl">
    About Us
  </h1>
  
   <p className=" text-2xl lg:text-2xl py-2  leading-loose text-text1 px-5">
            Globally Green is a Non Governmental Organisation whose mission is to inspire millions individuals
            around the globe to come up with innovative ideas and solutions to protect our enivronment and be part of the solution.</p>
            <p className="text-2xl lg:text-2xl py-2 leading-loose   text-text1 px-5 ">
              Through cultural collaboration and education, we seek to create a world where nature would be conserved and our enivronment protected
            </p>


</div>


</div>

<div className="mx-auto max-w-4xl text-center py-4">
<h1 className="text-2xl max-w- font-semibold leading-8 py-8 tracking-tight text-main3 sm:text-3xl">
     Our Team
  </h1>
  <div>

 {/* <Member/> */}


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