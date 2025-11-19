import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <section
            id="skills"
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center"
                        >
                            <span className="text-4xl mb-2">{skill.icon}</span>
                            <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm text-center">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
