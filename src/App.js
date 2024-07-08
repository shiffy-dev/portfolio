
import About from './components/About';
import Home from "./components/Home";
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <div id="projects">
      <Projects />
      </div>
      <Contact />
      
    </div>
  );
}

export default App;