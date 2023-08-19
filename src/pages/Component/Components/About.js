import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Aboutus from "../../../assets/Images/About/Profile.jpg";
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
                  <p>Full Stack Engineer</p>
                </div>
              </div>
            </Col>
            <Col md={7} className="abouttextbox">
              <div>
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                  Im a <span className="developer">Full Stack Developer</span>.
                  Graduated from Prime Digital Academy immersive
                  bootcamp.My skillset includes proficiency in React, ExpressJs, and PostgreSQL.
                  Before Prime Digital Academy, worked alongside with
                  Addcomposites and improved user interface, colloborated, and
                  solved problems.
                </p>

                <p className="about-subtitle">
                  I am always motivated to learning various technologies.Using
                  creativity, rebranding, designing, and building end to
                  end projects.Personally, I like helping my family and
                  community!
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
                      <span className="perName2">23 Years</span>
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
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;
