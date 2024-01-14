import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* SIDEBAR */}
            <Sidebar />

            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Abhinav Aryan</motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/abhinavaryan07/"><img src="linkedin.png" alt="" /></a>
                    <a href="https://github.com/07abhi9av"><img src="github.png" alt="" /></a>
                    <a href="#"><img src="downloading.png" alt="" /></a>   {/* RESUME */}
                    <a href="https://www.youtube.com/@Dimensity"><img src="youtube.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar