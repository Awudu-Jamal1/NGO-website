
import VolunteerContent from "./infoContent"
import WorkTop from "./workTop"

export const WorkMain =()=>{
    return(
        <div className="mb-40">
            <div className="">
            <div className="hidden lg:block"><WorkTop/></div>
            <div>
<VolunteerContent/>
            </div>

            </div>
        </div>
    )
}