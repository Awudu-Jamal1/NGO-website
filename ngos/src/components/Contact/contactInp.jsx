
export const ContactInput=()=>{
    return(
        <div className="   px-8  ">
            <div className="bg-main3 border-4 text-center py-8  ">
                <div className="px-32 text-[#fff]">
                <div className="text-5xl py-3 font-bold  ">Contact Us</div>
                <div className="text-xl py-3 ">
                Thanks for your interest. Please fill out the form below and we will respond as soon as possible.
                
                </div>

</div>
                <div className="py-8" ><input className=" border-b-2 w-full text-2main bg-main3 max-w-[25em] border-[#fff]" type="text" placeholder="Your Name" /></div>
                <div className="py-8" ><input className=" border-b-2 w-full bg-main3 max-w-[25em] border-[#fff]" type="text" placeholder="Your Name" /></div>
                <div className="py-8" ><input className=" border-b-2 w-full bg-main3 max-w-[25em] border-[#fff]" type="text" placeholder="Your Name" /></div>
                <div className="py-8" ><input className=" border-b-2 w-full bg-main3 max-w-[25em] border-[#fff]" type="text" placeholder="Your Name" /></div>
                <div className="py-4">
                    <button className="bg-[#004b23] text-[#fff] px-4 py-3 " >Submit</button>
                </div>
            </div>
        </div>
    )
}