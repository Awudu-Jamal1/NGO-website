import { faMobileScreen,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ContactDetails() {
    return (  <>
    <div className="max-w-7xl m-auto pt-20 bg-white">
        <div className="grid text-center md:grid-cols-3 lg:text-left lg:grid-cols-3 max-w-4xl m-auto gap-32  px-4 py-5 ">
            <div className="">
                <div>
              
                <FontAwesomeIcon className="text-blue-700 text-6xl"  icon={faLocationDot} />
           
                </div >
                <div className="py-5  ">
                    <h6 className="text-lg  font-medium">Address</h6>
                    <p className="text-small  text-sm leading-relaxed py-5">Hse No.30 Ritz Junction, Ashale Botwe Nmai Dzorn Road Madina, Accra, Ghana</p>
                </div>

            </div>

            <div>
                <div>
                <FontAwesomeIcon className="text-blue-700 text-6xl " icon={faMobileScreen} />
                
                </div>
                <div className="py-5">
                    <h6 className="text-lg font-medium">Call Us</h6>
                    <p className="text-small text-sm leading-relaxed py-5">0592400229 / 0551698607</p>
                </div>

            </div>

            <div>
                <div>
                
                <FontAwesomeIcon className="text-blue-700 text-6xl" icon={faEnvelope} />
                </div>
                <div className="py-5">
                    <h6 className="text-lg font-medium">Email</h6>
                    <p className="text-small text-sm leading-relaxed py-5">contact.london@example.com</p>
                </div>

            </div>

        </div>

        <div>

        </div>
    </div>
    </>);
}

export default ContactDetails;