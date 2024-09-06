import logo from "../assets/JSLogo3.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
    return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flexshrink-0 item-center">
            <img className="mx-2 size-14" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
        </div>
    </nav>
    );
};

export default Navbar;