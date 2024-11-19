import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
           <h2 className="font-semibold">Login With</h2> 
           <div className="*:w-full space-y-2 mt-2">
            <button className="btn text-blue-700 bg-blue-200"><FaGoogle></FaGoogle> Login With Google</button>
            <button className="btn bg-gray-200"><FaGithub></FaGithub> Login With Github </button>
           </div>
        </div>
    );
};

export default SocialLogin;