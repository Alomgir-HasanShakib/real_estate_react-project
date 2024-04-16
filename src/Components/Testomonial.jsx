import { FaStar } from "react-icons/fa";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testomonial = () => {
  return (
    <div className="">
        <h2 className="text-4xl text-primary font-bold text-center mb-16 divider">Testomonial</h2>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: true,
        }}
        pagination={true}
      >
        <SwiperSlide className="max-w-96 items-center mr-5">
          {" "}
          <div className="bg-lighten p-10">
            <div className="left w-44 ">
              <img
                className="rounded-xl"
                src="https://i.postimg.cc/bv05T27k/image.jpg"
                alt="user"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-medium text-primary  pt-5">
                Harry Potter
              </h2>
              <p className=" text-orange-600 flex items-center ">
                <span className="text-xl font-medium text-primary mr-2">
                  Rating :{" "}
                </span>{" "}
                <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                <FaStar></FaStar> <FaStar></FaStar>
              </p>
              <p>
                Her Hospitality is awsome and mindblowing. I stayed here for
                couple of weeks and they can't feel me alone and they take care
                of me. Their hotels, resort are totaly different from athers.
                Their Behave is amazing and suggest you to book them.
              </p>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="max-w-96 items-center mr-5">
          {" "}
          <div className="bg-lighten p-10">
            <div className="left w-44 ">
              <img
                className="rounded-xl"
                src="https://i.postimg.cc/Y9nbnNbG/image.jpg"
                alt="user"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-medium text-primary  pt-5">
                Mack Alister
              </h2>
              <p className=" text-orange-600 flex items-center ">
                <span className="text-xl font-medium text-primary mr-2">
                  Rating :{" "}
                </span>{" "}
                <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                <FaStar></FaStar> <FaStar></FaStar>
              </p>
              <p>
                Her Hospitality is awsome and mindblowing. I stayed here for
                couple of weeks and they can't feel me alone and they take care
                of me. Their hotels, resort are totaly different from athers.
                Their Behave is amazing and suggest you to book them.
              </p>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="max-w-96 items-center mr-5">
          {" "}
          <div className="bg-lighten p-10">
            <div className="left w-44 ">
              <img
                className="rounded-xl"
                src="https://i.postimg.cc/jdVkGcRP/image.jpg"
                alt="user"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-medium text-primary  pt-5">
                jesus
              </h2>
              <p className=" text-orange-600 flex items-center ">
                <span className="text-xl font-medium text-primary mr-2">
                  Rating :{" "}
                </span>{" "}
                <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                <FaStar></FaStar> <FaStar></FaStar>
              </p>
              <p>
                Her Hospitality is awsome and mindblowing. I stayed here for
                couple of weeks and they can't feel me alone and they take care
                of me. Their hotels, resort are totaly different from athers.
                Their Behave is amazing and suggest you to book them.
              </p>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="max-w-96 items-center mr-5">
          {" "}
          <div className="bg-lighten p-10">
            <div className="left w-44 ">
              <img
                className="rounded-xl"
                src="https://i.postimg.cc/LsrznyCV/image.jpg"
                alt="user"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-medium text-primary pt-5">
                Miller
              </h2>
              <p className=" text-orange-600 flex items-center ">
                <span className="text-xl font-medium text-primary mr-2">
                  Rating :{" "}
                </span>{" "}
                <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                <FaStar></FaStar> <FaStar></FaStar>
              </p>
              <p>
                Her Hospitality is awsome and mindblowing. I stayed here for
                couple of weeks and they can't feel me alone and they take care
                of me. Their hotels, resort are totaly different from athers.
                Their Behave is amazing and suggest you to book them.
              </p>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="max-w-96 items-center mr-5">
          {" "}
          <div className="bg-lighten p-10">
            <div className="left w-44 ">
              <img
                className="rounded-xl"
                src="https://i.postimg.cc/bv05T27k/image.jpg"
                alt="user"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-medium text-primary pt-5">
               Martin
              </h2>
              <p className=" text-orange-600 flex items-center ">
                <span className="text-xl font-medium text-primary mr-2">
                  Rating :{" "}
                </span>{" "}
                <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                <FaStar></FaStar> <FaStar></FaStar>
              </p>
              <p>
                Her Hospitality is awsome and mindblowing. I stayed here for
                couple of weeks and they can't feel me alone and they take care
                of me. Their hotels, resort are totaly different from athers.
                Their Behave is amazing and suggest you to book them.
              </p>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testomonial;
