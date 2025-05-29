import "./Contact.css";
import React from 'react';
import { Button, SectionTitle } from "../../Components/index";
import aerial_viewMan from "../../assets/images/aerial-view-man.jpg";
import {cardItems} from "../../Data/CardItems"
import { FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa6";
import { getIcon } from '../../Utils/geticons';


const Contact = () => {
  return (
    <section className="section-b-wrap">
      <div className="section-b"></div>
      <div className="container" id="contact">
        <SectionTitle className= "title-contact" title="say hi" image={aerial_viewMan} alt= "aerial_view"/>
        <div className="contact">
          <div className="contact-info">
            <div className="contact-info-left">
              <div className="contact-services">
                <h3 className="contact-info-title">services</h3>
                {
                  cardItems.map((item) => (
                    <Button key={item.id} title= {item.title} clas= "section-btn" ref= {item.href}/>
                  ))
                }
              </div>
              <div className="contact-services">
                <h3 className="contact-info-title">stay connected</h3>
                <FaTwitter className="contact-services-icon"/>
                <FaInstagram className="contact-services-icon"/>
                <FaPinterest className="contact-services-icon"/>
                <FaYoutube className="contact-services-icon"/>
              </div>
              <div className="contact-services">
                <h3 className="contact-info-title">Start a project</h3>
                <p>I’m available for freelance projects</p>
              </div>
            </div>
            <div className="contact-info-right">
              <div className="contact-services">
                <h3 className="contact-info-title">About</h3>
                <p>Joshua is a professional web developer. Feel free to get in touch with me.</p>
              </div>
              <div className="contact-services">
                <h3 className="contact-info-title">Email</h3>
                <span>hello@josh.design</span>
              </div>
              <div className="contact-services">
                <h3 className="contact-info-title">Call</h3>
                <span>120-240-9600</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email address" required />
              {
                cardItems.map((item) => (
                  <div key={item.id}>
                  <span className="form-icon">{React.createElement(getIcon(item.icon))}</span>
                  <span>{item.title}</span>
              </div>
                ))
              }
              <textarea name="message" rows="8" placeholder="Tell me about the project"></textarea>
              <Button title= "Send" clas= "form-btn" ref= "/"/>
            </form>
          </div>
        </div>
      </div>
    </section> 
  )
} 

export default Contact;