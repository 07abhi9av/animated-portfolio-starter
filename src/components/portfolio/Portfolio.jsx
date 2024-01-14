import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "AI ChatBot",
        img: "https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg?w=996&t=st=1703102913~exp=1703103513~hmac=59a59b1c923d15544e9e0bd598f1d66c786a5e5215b264d48524b950c6bce9da",
        desc: "Developed a chatbot application using cutting-edge deep learning techniques, Python, and TensorFlow. The project aimed to provide a human-like conversational experience to users. It included natural language processing (NLP) models for understanding and generating responses, making it capable of handling a wide range of user inquiries and conversations."
    },
    {
        id: 2,
        title: "Food Order Application",
        img: "https://img.freepik.com/free-vector/delivery-boy-picks-up-parcel-from-online-store-sending-customer-with-location-application-by-motorcycle-vector-illustration_1150-56229.jpg?w=900&t=st=1703102848~exp=1703103448~hmac=e66fffe7892a39a0f7676c6f12506fe0b0697676e500868405f97bbeb701407a",
        desc: "Created a comprehensive food ordering and delivery mobile app, prioritizing a visually captivating and user-friendl interface. The application provides a smooth and aesthetically pleasing experience for users to explore nearby restaurants,peruse menus, make orders, and monitor their deliveries in real-time.",
    },
    {
        id: 3,
        title: "Employee MS",
        img: "https://img.freepik.com/free-vector/business-people-showing-document-client_1262-19209.jpg?w=740&t=st=1703102768~exp=1703103368~hmac=c88b1b26023b63d549ab965649104abc38964e6b6a110e854dbf09c6b1d0f82a",
        desc: "A React Native based Employee Management System, designing intuitive interfaces and implementing robust features, ensuring an efficient and modern system. honing my skills in software development and problem-solving in this dynamic environment."
    },
    {
        id: 4,
        title: "Weather Application",
        img: "https://as1.ftcdn.net/v2/jpg/04/91/54/18/1000_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg",
        desc: "Designed and developed a weather forecasting mobile application that provides real-time weather data for userdefined locations. The app leverages a RESTful API to fetch and display weather information, including temperature, humidity, wind speed, and more, in a minimalistic and user-friendly interface."
    },

]

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href="https://github.com/07abhi9av"><button>See Demo</button></a>
                </motion.div>
            </div>
        </div>
    </section>
};


const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;