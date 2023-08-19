import React, { useEffect } from "react";

import Aos from "aos";
import Links from '../Links'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ParticlesBackground from "./ParticlesBackground";

import "aos/dist/aos.css";
const HeaderBanner = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [text] = useTypewriter({
		words: ["a Web Developer.", "a Full-stack Developer.", "a Front-end Developer."],
		loop: {},
		typeSpeed: 120,
		deleteSpeed: 120
	});

  return (
    <>
  
      <div id="Home">
        <div className="home-section" >
         
          <div className="home">
          <div>
            <ParticlesBackground/>
          </div>
            <div className="img-bnr-text">
              <div>
                
                <h5 data-aos="fade-down " className="heading">Hello, my name is,</h5>
                <h1 data-aos="flip-down">Zakariye Aden</h1>
                <h3>Im <span className="position">{text}</span></h3>
                <h6 className="description">
                  Passionate about building user interface, designing, and adapting to new technologies
                </h6>
                <Links href="#About">
                <button className="BtnView">About Me</button>
                </Links>
        
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
