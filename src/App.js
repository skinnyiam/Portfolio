import About from "./components/About";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className="w-full dark:bg-gray-900 bg-gray-200 text-gray-900 dark:text-gray-300">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialLinks />
      <Footer />
      
    </div>
  );
}

export default App;