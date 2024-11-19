import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"


const NavBar = () => {
    return (
        <div className="flex justify-between items-center mt-4">
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">About</Link>
                <Link to="/about">Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
            <img src={userIcon} alt="" />
            <Link to="/auth/login" className="btn btn-neutral rounded-none">Login </Link>
            </div>
        </div>
    );
};

export default NavBar;