import member1 from "../../assets/images/Frame 3.png";
import member2 from "../../assets/images/Frame 4.png";
import member3 from "../../assets/images/Frame 5.png";
import member4 from "../../assets/images/saudat.jpg";
// import member1 from '../../assets/images/Frame 3.png'
const mem = [
  {
    id: 1,
    title: "position 1",

    image: member4,
  },
  {
    id: 2,
    title: "position 2",
    image: member2,
  },
  {
    id: 3,
    title: "position 3",
    image: member3,
  },
  {
    id: 3,
    title: "position 3",
    image: member1,
  },
];

function Member() {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-4  sm:grid-cols-2  gap-1">
        {mem.map((e) => (
          <div key={e.id} className="py-5 px-4  object-center">
            {" "}
            <img
              className="col-span-2 max-h-32  m-auto rounded-full object-contain sm:col-start-2 lg:col-span-1"
              src={e.image}
              alt="SavvyCal"
              // width={158}
              // height={48}
              style={{ height: "5rem" }}
            />
            <div className="py-6">
              <p className=" text-main font-bold text-[0.8em] tracking-wide">
                Michel Edwin
              </p>
              <p className="text-text1 font-semibold text-[0.75em] tracking-wide">
                {e.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Member;
