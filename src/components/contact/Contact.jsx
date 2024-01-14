import { useRef, useState } from "react";
import "./contact.scss"
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        x: -400,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {

    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7sdg2gt', 'template_nleq7dm', formRef.current, 'a5uB6A8oyV32GMpNw')
            .then((result) => {
                setSuccess(true);
            }, (error) => {
                setError(true);
            })
    };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together !</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>E-Mail</h2>
                    <span>abhinav.aryan0807@gmail.com</span>
                </motion.div>

                <motion.div className="item" variants={variants}>
                    <h2>Institution</h2>
                    <span>Vellore Institute of Technology, Vellore</span>
                </motion.div>

                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Vellore, Tamil Nadu, India</span>
                </motion.div>

            </motion.div>

            <div className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>

            <motion.div className="footer">
                <p>&#169; 2024<motion.span> | </motion.span>Made with ❤️ by Abhinav</p>
            </motion.div>

        </motion.div>


    )
}

export default Contact