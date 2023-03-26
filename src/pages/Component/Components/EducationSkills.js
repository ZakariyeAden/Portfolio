import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiMysql, DiNodejsSmall } from "react-icons/di";
import { GrReactjs, GrHeroku } from "react-icons/gr";
import { SiStyledcomponents,SiAdobephotoshop } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const EducationSkills = () => {
  return (
    <>
      <div className="educationSkill headding">
        <h1 className="text-center title">Education & Skills</h1>
      </div>
      <div>
        <Container>
          <Row className="education-box-main">
            <Col lg={4} md={4} className="educationColBox">
              <div className="education-box">
                <div className="educontion">
                  <h6>2018-2023</h6>
                  <h2>
                    Associate of Liberal of Arts Degree( Graduating in Summer
                    2023)
                  </h2>
                  <h3>Normandale Community College</h3>
                </div>
                <hr />
                <div className="educontion">
                  <h6>2021-2022</h6>
                  <h2>Web Development</h2>
                  <h3>The Odin Project</h3>
                </div>
              </div>
            </Col>

            <Col lg={8} md={8}>
              <div className="skills ml-3">
                <span className="icon skill">
                  <AiFillHtml5 size={60} className="html"/>
                  <h5 className="skill-heading">HTML</h5>
                </span>

                <span className="icon skill">
                  <DiCss3 size={60} className="css"/>
                  <h5 className="skill-heading">CSS</h5>
                </span>

                <span className="icon  skill">
                  <DiJavascript1 size={60} className="js"/>
                  <h5 className="skill-heading">Javascript</h5>
                </span>

                <span className="icon  skill">
                  <GrReactjs size={60} className="react"/>
                  <h5 className="skill-heading">ReactJs</h5>
                </span>

                <span className="icon  skill">
                  <DiMysql size={60} className="sql" />
                  <h5 className="skill-heading">SQL</h5>
                </span>

                <span className="icon skill">
                  <DiNodejsSmall size={60} className="nodejs"/>
                  <h5 className="skill-heading">NodeJs</h5>
                </span>

                <span className="icon skill">
                  <GrHeroku size={60} className="heroku"/>
                  <h5 className="skill-heading">Heroku</h5>
                </span>

                <span className="icon m skill">
                  <SiStyledcomponents size={60} />
                  <h5 className="skill-heading">Styled Components</h5>
                </span>

                <span className="icon m skill">
                  <FiFigma size={60} />
                  <h5 className="skill-heading">Figma</h5>
                </span>

                <span className="icon m skill">
                  <SiAdobephotoshop size={60} />
                  <h5 className="skill-heading">Adobe Photoshop</h5>
                </span>
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EducationSkills;
