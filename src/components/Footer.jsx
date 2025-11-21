import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Left - Copyright */}
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                    © {new Date().getFullYear()} Ahmed Muse. All rights reserved.
                </p>

                {/* Right - Social Icons */}
                <div className="flex gap-4 justify-center md:justify-end">
                    <a
                        href="https://github.com/ahmedmuseahmed"
                        target="_blank"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://linkedin.com/in/ahmedmuseahmed"
                        target="_blank"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href="https://facebook.com/ahmed.muse.ahmed.304755"
                        target="_blank"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <FaFacebook size={22} />
                    </a>

                    <a
                        href="https://instagram.com/ahmed_muse_ahmed"
                        target="_blank"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <FaInstagram size={22} />
                    </a>

                    <a
                        href="https://twitter.com/@Ahmedmuse18Ahme"
                        target="_blank"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <FaTwitter size={22} />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
