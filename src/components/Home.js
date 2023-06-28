import "../styles/Home.css"
import html5logo from "../assets/img/html5.svg"
import jslogo from "../assets/img/js.svg"
import css3logo from "../assets/img/css.svg"
import reactlogo from "../assets/img/react.svg"

export default function Home(){
  return(
    <section className="container-fluid containerfd home" id="Home">
      <div className="section-h1">
        <div className="info-perfil">
          <h2>Front-End React Developer</h2>
          <p>Hi, I'm David Arias. A passionate Front-end React Developer based in Bucaramanga, Colombia. 📍</p>
          <span><a href="">linkedin</a><a href="">github</a></span>
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