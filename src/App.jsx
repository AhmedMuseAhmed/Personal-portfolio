import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Documentary from "./components/Documentary.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Footer from "./components/Footer";



// Later we will add: Navbar, About, Contact, Footer

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <div className='max-w-7xl mx-auto'>

        {/* Navbar will go here soon */}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
        <Documentary />
        <Footer />
        {/* Contact + Footer later */}
      </div>
    </div>
  );
}

export default App;
