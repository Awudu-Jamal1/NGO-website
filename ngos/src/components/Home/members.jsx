import member1 from "../../assets/images/Frame 3.png";
import member2 from "../../assets/images/Frame 4.png";
import member3 from "../../assets/images/Frame 5.png";
import member4 from "../../assets/images/saudat.jpg";
import member5 from "../../assets/images/Frame 8.png";
import member6 from "../../assets/images/Frame 9.png";
// import member1 from '../../assets/images/Frame 3.png'
const mem = [
  {
    id: 1,
    title: "Founder and Executive Director",
    name: "Saudat Kamarre-Deen",

    image: member4,
  },
  {
    id: 2,
    title: "Communication Director",
    name: "Bright Kwasi Bediako",
    image: member2,
  },
  {
    id: 3,
    title: "Program Director",
    name: "Patricia Badua Nkansah",

    image: member3,
  },
  {
    id: 4,
    title: "Volunteer Coordinator",
    name: "Desmond Mensah",
    image: member1,
  },
  {
    id: 5,
    title: "Project Coordinator",
    name: "Hamida Annoh",
    image: member5,
  },
  {
    id: 6,
    title: "Content Manager",
    name: "Nana Boakye Yiadom",
    image: member6,
  },
];

function Member() {
  return (
    <>
      <div
        id=""
        className="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2  px-2 lg:px-0 gap-10"
      >
        {mem.map((e) => (
          <div key={e.id} className="py-5 flex gap-10  ">
            {" "}
            <div>
              <img
                className="col-span-2 max-h-60  m-auto  object-contain sm:col-start-2 lg:col-span-1"
                src={e.image}
                alt="SavvyCal"
                // width={158}
                // height={48}
                style={{ height: "12rem" }}
              />
            </div>
            <div className="py-6  w-2/4">
              <p className="text-main4  text-base uppercase ">{e.title}</p>
              <p
                className="  font- text-3xl font-semibold tracking-wide"
                style={{ fontFamily: "Encode Sans Condensed, serif" }}
              >
                {e.name}
              </p>
              <div className="border w-full my-2"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Member;
