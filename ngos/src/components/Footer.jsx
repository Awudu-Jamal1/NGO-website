import { useState } from "react";
import logo from "../assets/images/logo 3.png";

function Footer() {
  const [ data, setData] = useState("")
  const changeHandler=(e)=>{
  const info =e.target.value
    setData(info)

  }
  return (
    <>
      <footer id="ct" className="   shadow-inner py-10 text-main3">
       <div className="grid  w-90   lg:grid-cols-6 sm:grid-cols-1 gap-3">
        <div></div>
        <div className="text-[8em]" ><img className="" src={logo} alt="" /></div>
        <div className="col-span-4 grid pt-5 justify-items-center  lg:grid-cols-4 sm:grid-cols-1 ">
        <div>
        <ul>
        <div className="font-bold text-[1.2em]">Sectors</div>

 <li>Climate Change</li>
<li> Circular Economy </li>
<li>
Disaster Risk Reduction
</li>


        </ul>
        </div>
        <div>
        <div className="font-bold text-[1.2em]">Company</div>
          <ul>
            <li>About Us</li>
            <li>Our Works</li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-[1.2em]">Socials</div>
          <ul className="text-[0.9em]">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>

          </ul>
        </div>
        <div>Sectors</div>
        </div>
        
       </div>
        
      </footer>
    </>
  );
}

export default Footer;
