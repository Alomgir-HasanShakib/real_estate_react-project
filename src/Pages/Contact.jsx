import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaLink, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Your Homies | Contact</title>
      </Helmet>
      <div className="bg-lighten p-10 text-center mt-16">
        <h2 className="text-4xl font-extrabold text-primary">Contact Us</h2>
      </div>

      <div>
        <form className="md:max-w-[50%] mx-auto mt-16 shadow-lg px-3 md:p-10 space-y-2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <textarea
            className="textarea textarea-bordered w-full resize-none h-32"
            placeholder="Your Message"
          ></textarea>
          <input
            type="button"
            value="Send Message"
            className="btn bg-primary text-lighten hover:bg-transparent hover:border-primary hover:text-primary w-full"
          />
           <h2 className="text-center divider font-bold text-primary pt-16 pb-8">
        Or you can Contact Us
      </h2>
        <div className="flex justify-center ">
          <div className="space-y-2">
            <p className="flex gap-2 items-center text-primary">
              <FaPhone></FaPhone> Phone : +880123456789
            </p>
            <p className="flex gap-2 items-center text-primary">
              <FaEnvelope></FaEnvelope> Email : info@yourhomies.com
            </p>
            <p className="flex gap-2 items-center text-primary">
              <FaLink></FaLink> Website : www.your-homies.com
            </p>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
