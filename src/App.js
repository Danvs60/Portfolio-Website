import Home from './components/Home'
import Projects from './components/Projects';
import About from './components/About'
import { useRef } from 'react'

function App() {
  const homeRef = useRef(null)
  const scrollToHome = () => {
    homeRef.current && homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const projectRef = useRef(null)
  const scrollToProjects = () => {
    projectRef.current && projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const aboutRef = useRef(null)
  const scrollToAbout = () => {
    aboutRef.current && aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div>
      <Home scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} reference={homeRef} />
      <Projects scrollToAbout={scrollToAbout} scrollToHome={scrollToHome} reference={projectRef} />
      <About scrollToProjects={scrollToProjects} scrollToHome={scrollToHome} reference={aboutRef} />
    </div>
  );
}

export default App;
