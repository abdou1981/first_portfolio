import { SectionTitle, Table, Table2 } from "../../Components";
import "./About.css";
import young_man from "../../assets/images/young-man.jpg";
import about_image from "../../assets/images/couple-working.jpg"
import { AboutIcons } from "../../Data/AboutIcons";
import { getImageUrl } from "../../utils/image_utils";

const About = () => {
  return (
    <div id="about">
      <section className="container">
        <div className="about-container">
          <div className="about-image">
            <img src={about_image} alt="about_image" />
          </div>
          <div className="about-text">
            <SectionTitle className = "title-about" title= "my story" image = {young_man} alt="young_man"/>
            <h3>a little bit about Joshua</h3>
            <p className="about-text-p">
            This one-page HTML portfolio is provided by <a href="https://templatemo.com" target="_blank">TemplateMo</a>. This layout is based on Bootstrap v5.1.3 CSS and JS libraries. Image credits go to <a href="https://unsplash.com" target="_blank">Unsplash</a> and <a href="https://freepik.com" target="_blank">FreePik</a> for images used in this page.
            </p>
            <p className="about-text-p">
            You are allowed to use this template for your websites. You are not allowed to redistribute the template ZIP file on any other website. Please <a href="https://templatemo.com/contact" target="_blank">contact us</a> for more info.
            </p>
          </div>
        </div>
      </section>
      <section className="section-b-wrap">
        <div className="section-b"></div>
        <div className="container">
          <div className="features-table">
            <Table/>
            <Table2/>
          </div>
        </div>
      </section>
      <section className="container clients">
        <h4>Companies I've had worked</h4>
        <div className="client-icon">
          {
            AboutIcons.map((item) => (
              <div key={item.id}><img src={getImageUrl(item.title)} alt= {item.alt} /></div>
              )
            )
          }
        </div>
      </section>
    </div>
  );
}

export default About;