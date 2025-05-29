import "./CardService.css";
import React from "react";
import {Button} from "../index";
import { Link } from "react-scroll";

const CardService = ({classe, title, price, subTitle, icon}) => {

  return (
    <div className={`card ${classe}`}>
      <header className="card-header">
        <h3>{title}</h3>
        <span>{price}</span>
      </header>
      <section className="card-section">
        <p className="card-para">{subTitle}</p>
        <Link to= "home" smooth={true} offset={-100} duration={500}>
          <div className="card-btn-wrap">
            <Button title= "Discover More" clas = "card-btn" ref = "/"/>
          </div>
        </Link>
        
        <div className="service-icon-wrap">{icon}</div>
      </section>
    </div>
  )
};

export default CardService;