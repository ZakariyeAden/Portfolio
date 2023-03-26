import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Aboutus from "../../../assets/Images/About/Profile.png";
import Resume from "../../../assets/Images/ZakariyeAdenResume.pdf";
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
                  Im a <span className="developer">Full Stack Developer</span> with experience. Started learning
                  how to code during Normandale Community College while learning
                  Web Development.Landed Web Developer Intern with Addcomposites
                  and worked alongside with my Manager to build User Interface.I
                  learned that I work best by building projects and working
                  alongside with team! Graduated from Prime Digital Bootcamp
                  immersive program.
                </p>

                <p className="about-subtitle">
                  I am always self motivated to Software Developer to building
                  User Interface.Using creativity, problem solving skills,
                  designing, and building end to end projects.In my free, I like
                  helping my family and community or reading books!
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
                <a className="resume" href={Resume} download>
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
