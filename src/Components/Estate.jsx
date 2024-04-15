import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Estate = ({ property }) => {
  const { image, location, type, rating, name, id } = property;
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div
      className="card card-compact max-w-96 bg-base-100 shadow-xl m-4"
      data-aos="fade-right"
    >
      <figure>
        <img className="md:h-60" src={image} alt="Shoes" />
      </figure>
      <div className="card-body" >
        <h2 className="text-3xl font-semibold text-darker">{name}</h2>
        <p className="text-xl font-medium text-primary">{location}</p>
        <p className="text-xl font-medium text-primary flex items-center">
          {" "}
          <span className="flex gap-2 text-orange-600 mr-2">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
          </span>{" "}
          {rating}
        </p>
        <h2 className=" text-xl md:text-2xl font-medium text-primary flex-grow mb-5">
          Type : {type}
        </h2>
        <div className="card-actions ">
          <Link to={`/propertyDetails/${id}`}>
            {" "}
            <button className="btn bg-primary text-lighten ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Estate;
