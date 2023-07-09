import imgeie from "../assets/img/English-is-Easy.png"
import '../styles/Projects.css'
import reactlogo from '../assets/img/react.svg'
import githublogo from  "../assets/img/github.svg"
import internetlogo from  "../assets/img/internet.svg"

export default function Projects(){
  return(
    <div className="container-fluid containerfd projects" id="Projects">

        <h2>Projects</h2>
        
        <section className="board-projects container-fluid">
          <div className="board-img">
            <a href="https://eie.davidariaz.dev/" target="_blank" rel="noopener noreferrer">
              <img className="img-project"src={imgeie} alt="project-eie" />
            </a>
          </div>
          <div className="board-info">              
              <ul className="techStack">
                <li><img src={reactlogo} alt="Icon-React" title="React JS" /></li><h1>_English is Easy</h1>
              </ul>
              <spa className="span-progress">[In progress...]</spa>
              
              
              <p>Website for a professional coaching startup in English language teaching. The platform allows you to schedule classes, pay subscriptions and check the content of the courses.</p>


              <div className="elements-center">
                <span className="span-padding">
                  <a href="https://github.com/Jebux/englishiseasy" target="_blank" rel="noopener noreferrer">
                    <img className="brand-logo" src={githublogo} alt="githublogo" />
                    _Code
                    </a>
                </span>
                <span className="span-padding">
                  <a href="https://eie.davidariaz.dev/" target="_blank" rel="noopener noreferrer">
                    <img className="brand-logo" src={internetlogo} alt="githublogo" />
                    _Live
                  </a>
                </span>
              </div>
              
          </div>
        </section>

    </div>
  )
}