import "./Projects.css";
import {SectionTitle, CardProject} from "../../components/index";
import whiteDesk from "../../assets/images/white-desk.jpg";
import {projectsCardItem} from "../../Data/ProjectCardItem";

const Projects = () => {

  return (
    <section className="container projects" id="projects">
      <div className="projects-title-wrap">
        <SectionTitle className ="projects-title" title="Projects" image= {whiteDesk} alt="whiteDesk"/>
      </div>
      <div className="card-project-wrap">
        {projectsCardItem.map((item) => (
          <CardProject
            key={item.id}
            index={item.id}
            title={item.title} 
            description={item.description} 
            image={item.image}
            alt={item.alt}
          />
        ))}
      </div>
    </section> 
  )
} 

export default Projects;