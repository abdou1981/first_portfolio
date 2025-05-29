import React from 'react'
import "./Services.css";
import { CardService, SectionTitle } from "../../Components/index";
import hand_shake from "../../assets/images/handshake-man-woman.jpg";
import { cardItems } from "../../Data/CardItems";
import { getIcon } from '../../Utils/geticons';

const Services = () => {

  return (
    <section className="section-b-wrap">
      <div className="section-b"></div>
      <div className="service-container"  id="services">
        <SectionTitle className= "title-services" title="Services" image={hand_shake} alt= "hand_shake"/>
        <div className="cards">
        {
          cardItems.map((item) => (
            <CardService 
              key={item.id}   
              classe= {item.id === 2 || item.id === 4  ? "card1" : ""}  
              title={item.title}  
              price={item.price}   
              subTitle={item.sub_title}   
              icon={React.createElement(getIcon(item.icon))}  
            />
            )
          )
        }
        </div>
      </div>
    </section>
  )
}

export default Services;