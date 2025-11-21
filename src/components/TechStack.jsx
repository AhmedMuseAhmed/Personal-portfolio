import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import {
    FaReact,
    FaJs,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiGo, SiFlutter, SiVercel, SiPostgresql } from "react-icons/si";

const tech = [
    { id: 1, icon: <FaReact className="text-blue-500" />, label: "React" },
    { id: 2, icon: <FaJs className="text-yellow-500" />, label: "JavaScript" },
    { id: 3, icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind CSS" },
    { id: 4, icon: <SiGo className="text-cyan-500" />, label: "Go (Basic)" },
    { id: 5, icon: <SiFlutter className="text-blue-400" />, label: "Flutter (Basic)" },
    { id: 6, icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, label: "Git & GitHub" },
    { id: 7, icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
    { id: 8, icon: <FaCss3Alt className="text-blue-600" />, label: "CSS" },
    { id: 9, icon: <SiVercel className="text-black dark:text-white" />, label: "Vercel" },
    { id: 10, icon: <SiPostgresql className="text-blue-700" />, label: "PostgreSQL (Basic)" },
];

const TechStack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="tech-stack"
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Tech Stack
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
                >
                    {tech.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="text-5xl mb-3">{item.icon}</div>
                            <p className="text-gray-800 dark:text-gray-300 font-semibold text-center">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default TechStack;
