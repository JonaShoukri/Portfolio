import logo from "../assets/JSLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
    return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flexshrink-0 item-center">
            <img className="mx-2 size-14" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/jonas-shoukri-832967215/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a href="https://www.github.com/jonashoukri/" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
            </a>
        </div>
    </nav>
    );
};

export default Navbar;