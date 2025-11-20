import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { achievements } from '../data/achievements';
import { FaTrophy, FaAward, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const iconMap = {
        1: FaTrophy,
        2: FaAward,
        3: FaBriefcase,
        4: FaGraduationCap,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section id="achievements" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg ">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold">Achievements</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                {/* Timeline */}
                <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

                        {achievements.map((item) => {
                            const Icon = iconMap[item.id] || FaAward;
                            return (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    className="flex mb-12 gap-6 md:gap-8 relative"
                                >
                                    {/* Icon */}
                                    <div className="hidden md:flex justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
                                        >
                                            <Icon size={28} />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                            {item.year}
                                        </div>
                                        {item.duration && (
                                            <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
                                                {item.duration}
                                            </div>
                                        )}
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
