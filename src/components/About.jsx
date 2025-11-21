import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 mb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* About Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto bg-white dark:bg-gray-800 px-8 py-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                >
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        I am <strong className="text-blue-600 dark:text-blue-400">Ahmed Muse Ahmed</strong>,
                        a passionate <strong>Bachelor of Information Technology graduate from SIMAD University</strong> with a strong drive for building clean, scalable, and modern applications.
                    </p>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        I specialize in <strong>frontend engineering with React</strong>,
                        <strong> backend development using Go & PostgreSQL</strong>, and
                        <strong> cross-platform mobile development with Flutter</strong>.
                    </p>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        My current goal is to secure a
                        <strong className="text-purple-600 dark:text-purple-400"> junior developer role</strong>
                        where I can grow professionally, contribute meaningfully, and work on challenging real-world systems.
                    </p>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        I consider myself a disciplined, motivated learner who loves creating
                        intuitive user experiences and solving real-life problems through
                        modern technology and clean engineering principles.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
