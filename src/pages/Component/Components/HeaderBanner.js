import React, { useEffect } from "react";

import Aos from "aos";
import Links from '../Links'
import Profile from '../../../assets/Images/About/Profile.png'
import "aos/dist/aos.css";
const HeaderBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="Home">
        <div className="home-section">
        
          <div className="home">
          <span className=" ">
            <div className="">
           
            </div>
          </span>
            <div className="img-bnr-text ">
              <div>
                <h5 data-aos="fade-down " className="heading">Web Developer</h5>
                <h1 data-aos="flip-down">Zakariye Aden</h1>
                <h6 className="description">
                  Passionate about building User Interface and 
                  <br />
                  learning new skills or technologies that are growing within web development or tech. 
                  
                  <br />
                  Always motivated and great team member who can add value and grow within the team.
                </h6>
                <Links href="#About">
                <button className="BtnView">About Us</button>
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
