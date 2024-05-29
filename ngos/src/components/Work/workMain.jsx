import { WorkContent } from "./workContent"

export const WorkMain =()=>{
    return(
        <div>
            <div className="py-5">
            <div className="w-full text-7xl font-bold py-16 text-main3  owork "><h1 className="mx-auto max-w-5xl" >Our Work</h1></div>
            <div>
                <WorkContent/>
            </div>

            </div>
        </div>
    )
}