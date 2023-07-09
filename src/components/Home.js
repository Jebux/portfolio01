import "../styles/Home.css"
import html5logo from "../assets/img/html5.svg"
import jslogo from "../assets/img/js.svg"
import css3logo from "../assets/img/css.svg"
import reactlogo from "../assets/img/react.svg"
import githublogo from  "../assets/img/github.svg"
import linkedinlogo from  "../assets/img/linkedin.svg"

export default function Home(){
  return(
    <section className="container-fluid containerfd home" id="Home">
      <div className="section-h1">
        <div className="info-perfil">
          <h1 className="no-margin">David Arias</h1>
          <h4 className="no-margin">Front-End React Developer</h4>
          <p>Based in Bucaramanga, Colombia. 📍</p>
          <p>
          Industrial engineer turned front-end developer skilled in HTML, JavaScript, CSS, and React. I excel in crafting engaging user experiences through clean interfaces. With a problem-solving mindset and a passion for responsive design, I create outstanding websites. 
          </p>
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          <span className="span-padding">
            <a href="https://www.linkedin.com/in/jesusariaz/" target="_blank" rel="noopener noreferrer">
              <img className="brand-logo" src={linkedinlogo} alt="logo" />
            </a>
          </span>
          <span className="span-padding">
            <a href="https://github.com/Jebux" target="_blank" rel="noopener noreferrer">
              <img className="brand-logo" src={githublogo} alt="logo" />
            </a>
          </span>
        </div>
        
        <div className="profile-img">
        </div>

      </div>

        <div className="skills">

            <div className="skills-title">
              <h3>Tech Stack   </h3>
            </div>
            
            <div className="logos">
              <ul className="techStack">
                <li><img src={html5logo} alt="Icon-html" title="HTML5" /></li>
                <li><img src={css3logo} alt="Icon-CSS3" title="CSS3" /></li>
                <li><img src={jslogo} alt="Icon-Js" title="JavaScript" /></li>
                <li><img src={reactlogo} alt="Icon-React" title="React JS" /></li>
              </ul>
            </div>

        </div>
    

    </section>
  )
  
}