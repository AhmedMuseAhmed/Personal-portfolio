import profilePic from "../assets/profile.jpg";
import { motion } from 'framer-motion';
import { HiArrowDownTray, HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AnimatedName from "./AnimatedName.jsx";





const Hero = () => {
    const handleDownloadCV = () => {
        window.open("/Ahmed-Muse-CV.pdf", "_blank");
    };


    const handleContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center relative pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >


            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center w-full">


                    {/* LEFT SIDE – TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold"
                        >
                            👋 Welcome to my Portfolio
                        </motion.div>

                        <AnimatedName />


                        {/* Titles */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300"
                        >
                            Full-Stack Developer specializing in crafting clean, responsive, and modern user interfaces with React, while building fast, secure, and scalable backend systems using GoLand, PostgreSQL, JWT authentication, and RESTful API services.
                        </motion.div>

                        {/* Roles */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-2 mb-8 text-lg text-gray-600 dark:text-gray-400"
                        >
                            <p>📿 Imam & Community Leader (4+ Years)</p>
                            <p>🚀 Kaafiye App Contributor</p>
                            <p>🎓 SIMAD University Presidential Candidate</p>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
                        >
                            <motion.a
                                href="/Ahmed-Muse-CV.pdf"
                                download="Ahmed-Muse-CV.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative flex items-center justify-center gap-2 px-8 py-4 
                                            bg-gradient-to-r from-blue-600 to-purple-600 
                                            text-white font-extrabold rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-white/1"></span>

                                <span className="relative z-10 flex items-center gap-2">
                                    <HiArrowDownTray size={20} />
                                    Download CV
                                </span>
                            </motion.a>




                            <motion.button
                                onClick={handleContact}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold"
                            >
                                <HiEnvelope size={20} />

                                Contact Me
                            </motion.button>
                        </motion.div>

                        {/* Socials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-4 justify-center md:justify-start"
                        >
                            <motion.a
                                href="https://github.com/ahmedmuseahmed"
                                target="_blank"
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full"
                            >
                                <FaGithub size={24} />
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/in/ahmedmuseahmed"
                                target="_blank"
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full"
                            >
                                <FaLinkedin size={24} />
                            </motion.a>

                            {/* Facebook */}
                            <motion.a
                                href="https://facebook.com/ahmed.muse.ahmed.304755"
                                target="_blank"
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full"
                            >
                                <FaFacebook size={24} />
                            </motion.a>

                            {/* Instagram */}
                            <motion.a
                                href="https://instagram.com/ahmed_muse_ahmed"
                                target="_blank"
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full"
                            >
                                <FaInstagram size={24} />
                            </motion.a>

                            <motion.a
                                href="https://twitter.com/@Ahmedmuse18Ahme"
                                target="_blank"
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full"
                            >
                                <FaTwitter size={24} />
                            </motion.a>


                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE – IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30"></div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl"
                            >
                                <img
                                    src={profilePic}
                                    alt="Ahmed Muse Ahmed"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
