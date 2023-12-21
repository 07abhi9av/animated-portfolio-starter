import { useRef } from "react";
import "./services.scss"
import { color, motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>

            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your us grow
                    <br /> and move forward together.
                </p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>

                <div className="title">
                    <img src="/arrow.jpg" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Explore</motion.b> My
                    </h1>
                </div>

                <div className="title">
                    <h1>
                        Learning <motion.b whileHover={{ color: "orange" }}>Curve.</motion.b>
                    </h1>
                    <a href="#Contact"><button>WANT TO CONNECT?</button></a>
                </div>

            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Contributor</h2>
                    <p>
                        Diving into HacktoberFest, I contributed to open source projects,
                        embracing collaboration and innovation. Joining the global
                        developer community, I left my mark in the coding celebration,
                        learning and growing along the way.
                    </p>
                    <button>HacktoberFest, 2022</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Cloud Developer Intern</h2>
                    <p>
                        Thriving in the AICTE Remote Internship, I collaborated
                        with Edunet Foundation under the IBM SkillsBuild program.
                        My role involved crafting and deploying dynamic webpages
                        to the cloud seamlessly using Cloud Bucket technology.

                    </p>
                    <button>IBM</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web Developer</h2>
                    <p>
                        I played a
                        pivotal role in designing and implementing sophisticated
                        websites. Focused on merging aesthetic appeal with seamless
                        functionality, I contributed to enhancing the online
                        presence of clients through meticulous web development.
                    </p>
                    <button>OriumWeb Solutions</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Software Engineer Intern</h2>
                    <p>
                        My role as a Software Engineer Intern at RadicalX was
                        immersed in the realm of AI-driven projects. Contributing
                        to transformative technologies, I leveraged advanced algorithms,
                        making significant strides in the development of intelligent solutions.
                    </p>
                    <button>RadicalX, 2023 - 2024</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services