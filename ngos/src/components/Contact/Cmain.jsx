import { ContactInput } from "./contactInp"

export const Contact =()=>{
    return(
        <div className="py-8">
            <div className="  mx-auto max-w-5xl py-8">
            <ContactInput/>
            <div className="py-5 px-2 text-main3">
                <div className="py-10">
                    <div className="font-bold text-6xl">Get In Touch</div>
                    
<div className="text-2xl py-4">
You can reach us through any of the contacts below.
</div>

                </div>
                <div className="grid grid-cols-1 gap-16  lg:grid-cols-3 py-8 ">
                    <div className="">
                        <div className="text-3xl text-[#004b23] font-bold ">Address</div>
                        <div className="text-xl py-4    ">
                        Hse No.30 Ritz Junction, Ashale Botwe Nmai Dzorn Road Madina, Accra, Ghana
                        </div>

                    </div>
                    <div>
                        <div className="text-3xl font-bold text-[#004b23] ">Phone Number</div>
                        <div className="text-xl py-4   ">
                        0592400229 / 0551698607
                        </div>

                    </div>
                    <div>
                        <div className="text-3xl font-bold text-[#004b23]">Mail</div>
                        <div className="text-xl py-4    ">
                        globallygreeen@gmail.com
                        </div>

                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}