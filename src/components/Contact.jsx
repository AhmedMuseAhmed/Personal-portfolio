import { motion } from "framer-motion";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Contact Me
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10"></div>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
                    Feel free to reach out for collaborations, projects, or just to say hi!
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

                    <motion.a
                        href="mailto:ahmedmuseahmed@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white dark:bg-gray-900 shadow-lg border dark:border-gray-700 text-gray-800 dark:text-white"
                    >
                        <HiEnvelope size={24} />
                        <span>Email Me</span>
                    </motion.a>

                    <motion.a
                        href="tel:+252615607048"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white dark:bg-gray-900 shadow-lg border dark:border-gray-700 text-gray-800 dark:text-white"
                    >
                        <HiPhone size={24} />
                        <span>Call Me</span>
                    </motion.a>


                </div>
            </div>
        </section>
    );
};

export default Contact;
