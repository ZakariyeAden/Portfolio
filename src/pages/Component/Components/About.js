import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Aboutus from "../../../assets/Images/About/Profile.png";
import Resume from '../../../assets/Images/ZakariyeAdenResume.pdf'
const About = () => {
  return (
    <>
      <div className="container" id="About">
        <div className="about headding " data-aos="fade-right">
          <Row className="about-main">
          
            <Col md={5}>
              <div className="about-img ">
                <Image
                  data-aos="flip-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  className="d-block img-fluid mx-auto rounded-circle m-rt"
                  src={Aboutus}
                />
                <div className="text-center About-name">
                  <h6>Zakariye Aden</h6>
                  <p>Web Developer</p>
                </div>
              </div>
            </Col>
            <Col md={7} className="abouttextbox">
              <div>
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                  At Normandale Community college, I am pursing my Associate
                  degree. I have found interest in Computer Science and took
                  courses at College although Normandale Community College
                  courses were outdated.I found passion in Web Development which
                  made me decide to learn on my own and discipline myself to
                  become Web Developer.Currently learning App Development and
                  interested in Cyber Security.
                </p>

                <p className="about-subtitle">
                  I am always motivated, phenomenal team member, and capable of
                  learning new skills and working effiecently. During my
                  internship within Addcomposite, I have built and design few
                  pages and made their user interface fully responsive.
                </p>
              </div>
              <div className="about-psl-info">
                <h1 className="about-sub-info">Personal Info</h1>
                <Row>
                  <Col>
                    <div className="about-list">
                      <span className="perName1">Name : </span>
                      <span className="perName2">Zakariye Aden</span>
                    </div>

                    <div className="about-list">
                      <span className="perName1">Age : </span>
                      <span className="perName2">22 Years</span>
                    </div>
                    <div className="about-list">
                      <span className="perName1">Nationality : </span>
                      <span className="perName2">USA</span>
                    </div>
                    <div className="about-list">
                      <span className="perName1">Freelance : </span>
                      <span className="perName2">Available</span>
                    </div>
                  </Col>
                  <Col>
                    <div className=" about-list ">
                      <span className="perName1">Address : </span>
                      <span className="perName2"> Minnesota, USA</span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">Phone : </span>
                      <span className="perName2">612-442-5173</span>
                    </div>
                    <div className=" about-list"></div>
                    <div className=" about-list">
                      <span className="perName1">E-mail : </span>
                      <span className="perName2">zakariyeadenn@gmail.com</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <button className="BtnView">
                <a
                  className="resume"
                  href={Resume}
                  download
                >
                  Download Resume
                </a>
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;
