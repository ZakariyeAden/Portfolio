import React, { useEffect } from "react";
import Banner from "../../../assets/Images/Banner/Banner.png";
import Aos from "aos";
import Links from '../Links'
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
            <div className="img-bnr-text ">
              <div>
                <h5 data-aos="fade-down " className="heading">Web Developer</h5>
                <h1 data-aos="flip-down">Zakariye Aden</h1>
                <p data-aos="fade-up">
                  Passionate about building User Interface and 
                  <br />
                  learning new skills and technologies that are growing within Tech such as App development.
                  <br />
                  Always motivated and great team member who can add value and grow within the team.
                </p>
                <Links href="#About" className="BtnView">About Us</Links>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
