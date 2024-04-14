import { useContext } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";
import { AuthContext } from "../Contexts/Authentication/Authentication";

const SocialLogin = () => {
  const { googleLogin, gitLogin } = useContext(AuthContext);

  return (
    <div className="mt-8">
      <div className="divider"> Continue With</div>
      <div className="mt-8 flex justify-around">
        <button
          onClick={ googleLogin}
          className="btn bg-primary text-lighten px-5 text-xl"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button
          onClick={gitLogin}
          className="btn bg-primary text-lighten px-5 text-xl"
        >
          <FaGithub></FaGithub>
        </button>
        <button className="btn bg-primary text-lighten px-5 text-xl">
          <FaFacebook></FaFacebook>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
