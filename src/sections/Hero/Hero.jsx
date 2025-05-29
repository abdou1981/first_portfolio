import "./Hero.css";
import pattern_header from "../../assets/svg/pattern_header.svg";
import young_man from "../../assets/images/young-man.jpg";
import excited_man from "../../assets/images/excited-man.png";
import {Button} from "../../Components/index";
import { Link } from "react-scroll";

const Hero = () => {
  
  return (
    <section className="hero-section" id="home">
      <img className="hero-pattern" src={pattern_header} alt="pattern_header" />
      <div className="container hero">
        <div className="hero-text">
          <div className="text-wrap">
            <div className="hero-title-wrap">
              <img className="avatar-image" src={young_man} alt="young_man" />
              <h1 className="hero-title">Hello friend!</h1>
            </div>
            <h2 className="hero-sub-title">I’m available for freelance work.</h2>
            <Link to= "about" smooth={true} offset={-100} duration={500}>
              <Button clas= "hero-btn" title="Let's begin" ref="/" />
            </Link>
              
          </div>
        </div>
        <div className="hero-image-section">
          <div className="hero-image-wrap"></div>
          <img src={excited_man} className="hero-image" alt="excited_man" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
