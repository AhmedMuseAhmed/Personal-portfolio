import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", id: "home" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Achievements", id: "achievements" },
        { name: "Certificates", id: "certificates" },
        { name: "Documentary", id: "documentary" }

    ];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 dark:bg-gray-900/40 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">Ahmed.</div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 dark:text-white"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 shadow-lg"
                >
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            {link.name}
                        </button>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
