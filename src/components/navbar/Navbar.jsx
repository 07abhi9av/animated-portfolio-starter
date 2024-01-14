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
                    <a href="#"><img src="github.png" alt="" /></a>
                    <a href="#"><img src="discord.png" alt="" /></a>
                    <a href="#"><img src="youtube.png" alt="" /></a>
                    {/* LINKED IN */}
                    {/* GITHUB */}
                </div>
            </div>
        </div>
    )
}

export default Navbar