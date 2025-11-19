import { motion } from "framer-motion";

const Documentary = () => {
    return (
        <section id="documentary" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto text-center">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
                >
                    Documentary Video
                </motion.h2>

                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>

                {/* Embeded Video Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-xl shadow-xl overflow-hidden"
                >
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
                        <iframe
                            src="https://drive.google.com/file/d/1K5-TaT9WyyQCNDseaQyMlqKkc286IUtF/preview"
                            allow="autoplay"
                            title="Ahmed Muse Documentary"
                            className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Optional Description */}
                <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                    A short documentary created by SIMAD University showcasing my leadership journey,
                    my presidential campaign, and my impact on the student community.
                </p>
            </div>
        </section>
    );
};

export default Documentary;
