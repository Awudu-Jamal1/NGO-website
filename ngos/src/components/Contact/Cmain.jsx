import ContactDetails from "./ContactDetails";
import MapSetup from "./mapSetup";
import MessageField from "./message";

export const Contact = () => {
  return (
    <>
    <div>
        <div><MapSetup/></div>
        <div className="-mt-48 mb-28">
        <div><ContactDetails/></div>
        <div className="max-w-7xl m-auto"><MessageField/></div>
        </div>
        
    </div></>
  );
};
