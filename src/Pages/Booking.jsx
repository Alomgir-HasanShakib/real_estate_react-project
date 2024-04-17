import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row max-h-screen items-center  justify-center">
      <div className=" flex p-3 md:p-10 items-center">
        <h2 className="text-4xl font-bold text-primary border-b-2 border-primary pb-3 mb-24 mt-10">
          Booking Page is Coming Soon
        </h2>
      </div>
      <div>
        <img
          src="https://i.postimg.cc/76HjCscR/depositphotos-11433417-stock-illustration-coming-soon.webp"
          alt=""
        />
        <div className="flex justify-center">
          <Link to="/">
            <button className="btn bg-transparent hover:text-lighten hover:bg-primary border-primary px-16 text-xl text-primary  items-center">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;
