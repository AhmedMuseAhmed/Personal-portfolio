import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Documentary from "./components/Documentary.jsx";

// Later we will add: Navbar, About, Contact, Footer

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <div className='max-w-7xl mx-auto'>
        {/* Navbar will go here soon */}
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
        <Documentary />
        {/* Contact + Footer later */}
      </div>
    </div>
  );
}

export default App;
