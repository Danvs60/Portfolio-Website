import Home from './components/Home'
import Projects from './components/Projects';
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
    <div className="h-screen">
      <Home scrollToProjects={scrollToProjects} reference={homeRef}/>
      <Projects reference={projectRef} />
    </div>
  );
}

export default App;
