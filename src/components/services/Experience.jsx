import { useRef } from "react";
import "./experience.scss"
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

const Experience = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="experience" variants={variants} initial="initial" ref={ref} animate={"animate"}>

            <motion.div className="textContainer" variants={variants}>
                <p>
                    Striving for Excellence ,<br />Embracing Every Challenge !
                </p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>

                <div className="title">
                    <img src="/zigzag-arrow.png" alt="" />
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
                    <button>IBM, 2023</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web Developer <br /> Intern</h2>
                    <p>
                        I played a
                        pivotal role in designing and implementing sophisticated
                        websites. Focused on merging aesthetic appeal with seamless
                        functionality, I contributed to enhancing the online
                        presence of the brand through meticulous web development.
                    </p>
                    <button>OriumWeb Solutions, 2023</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Software Engineer Intern</h2>
                    <p>
                        As a Software Engineer Intern at RadicalX, my primary focus
                        lies within the intricate domain of AI-driven projects.
                        Committed to innovation, I navigate the
                        complex landscape of artificial intelligence, consistently
                        aiming for excellence in every facet of my work.
                    </p>
                    <button>RadicalX, 2023 - 2024</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Experience