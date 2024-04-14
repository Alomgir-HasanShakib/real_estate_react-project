import { useEffect, useState } from "react";
import Property from "./Estate";

const Propertys = () => {
  const [propertys, setPropertys] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPropertys(data));
  }, []);
  console.log(propertys);
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-primary text-center">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 mt-16">
        {propertys.map((property, idx) => (
          <Property key={idx} property={property}></Property>
        ))}
      </div>
    </div>
  );
};

export default Propertys;
