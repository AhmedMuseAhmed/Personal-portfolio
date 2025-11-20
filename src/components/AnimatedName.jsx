import { motion } from "framer-motion";

const AnimatedName = () => {
    const name = "hmed Muse Ahmed"; // excludes the first A

    const letters = name.split("");

    return (
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-flex">
                A
                {letters.map((letter, index) =>
                    letter === " " ? (
                        <span key={index}>&nbsp;</span> // only word spacing
                    ) : (
                        <motion.span
                            key={index}
                            className="inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.12,
                                repeat: Infinity,
                                repeatDelay: 2.5,
                            }}
                        >
                            {letter}
                        </motion.span>
                    )
                )}
            </span>
        </h1>
    );
};

export default AnimatedName;
