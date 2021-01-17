import React from 'react'
import ImageSlider from '../../components/imageSlider/imageslid.components';
import NavBar from '../../components/navbar/navbar.component';
import TitleMessage from '../../components/titleMessage/titlemsg.components';
import About from '../about/about.components';
import Skills from '../skills/skills.components';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import {Particles} from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import ContactForm from '../contact/contact.components';
import FooterPanel from '../../components/footer/footer.components';
import ProjTimeLine from '../../components/timeline/timeline.components';

const HomePage = () => {
    return (
        <div id='home' style={{ position: "relative" }}>
       
         
         <ImageSlider/>
         <TitleMessage/>
         <NavBar/>
         <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
          <div style={{ backgroundColor: "#007bff" }}>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
              <hr />
              <Skills />
              </Slide>
            </Container>

           
          </div>

          
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr />
              <ProjTimeLine />
            </Slide>
            </Container>

          <Container className="container-box rounded">
            <Fade duration={500}>
            <hr />
              <ContactForm />
            </Fade>
          </Container>

          <hr />
          <FooterPanel/>
          <Particles
        className="particles particles-box"
        params={particlesOptions}
         />
         
        </div>
    );
};

export default HomePage;