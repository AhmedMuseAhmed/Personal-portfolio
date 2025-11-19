import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { certificates } from '../data/certificates';
import { FaCertificate } from 'react-icons/fa';

const Certificates = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <section id="certificates" ref={ref} className="py-20 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold">Certificates</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex justify-between mb-4">
                                <FaCertificate className="text-4xl text-blue-600 dark:text-blue-400" />
                                <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                                    {cert.year}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cert.description}</p>

                            <div className="text-xs text-gray-500">Issued by: {cert.issuer}</div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Certificates;
