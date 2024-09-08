import logo from "../assets/JSLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { motion } from "framer-motion";
import {ChakraProvider, FormControl, FormLabel, Switch} from '@chakra-ui/react'

const Navbar = () => {
    return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flexshrink-0 item-center">
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                href="https://www.linkedin.com/in/jonas-shoukri-832967215/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                href="https://www.github.com/jonashoukri/" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
            </motion.a>
        </div>
    </nav>
    );
};

export default Navbar;