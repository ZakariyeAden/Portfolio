import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const EducationSkills = () => {
  return (
    <>
    <div className="educationSkill headding">
              <h1 className="text-center title">
                Education & Skills
              </h1>
            </div>
            <div>
            <Container>
                <Row className="education-box-main">
                  <Col lg={4} md={4} className="educationColBox" >
                    <div className="education-box">
                      <div className="educontion">
                        <h6>2010-2012</h6>
                        <h2>Front-end Engineer</h2>
                        <h3>International Design Institute</h3>
                      </div>
                      <hr />
                      <div className="educontion">
                        <h6>2013-2014</h6>
                        <h2>Graphic Designer</h2>
                        <h3>HRK Design Institute</h3>
                      </div>
                      <hr />
                      <div className="educontion">
                        <h6>2015-2016</h6>
                        <h2>Visual Designer</h2>
                        <h3>HRK Design Institute</h3>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8} md={8}>
                    <div className="skill-bar">
                      <Row className="skill-box">
                        <Col xs={1}>
                          <span>90%</span>
                        </Col>
                        <Col>
                          <div className="bar">
                            <div className="info">
                              <span>HTML</span>
                            </div>
                            <div  className="progress-line html">
                              <span></span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="skill-bar">
                      <Row className="skill-box">
                        <Col xs={1}>
                          <span>75%</span>
                        </Col>
                        <Col>
                          <div className="bar">
                            <div className="info">
                              <span>React js</span>
                            </div>
                            <div className="progress-line reactjs">
                              <span></span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="skill-bar">
                      <Row className="skill-box">
                        <Col xs={1}>
                          <span>85%</span>
                        </Col>
                        <Col>
                          <div className="bar">
                            <div className="info">
                              <span>Wordpress</span>
                            </div>
                            <div className="progress-line Wordpress">
                              <span></span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="skill-bar">
                      <Row className="skill-box">
                        <Col xs={1}>
                          <span>88%</span>
                        </Col>
                        <Col>
                          <div className="bar">
                            <div className="info">
                              <span>UI/UX</span>
                            </div>

                            <div className="progress-line ui-ux">
                              <span></span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="skill-bar">
                      <Row className="skill-box">
                        <Col xs={1}>
                          <span>70%</span>
                        </Col>
                        <Col>
                          <div className="bar">
                            <div className="info">
                              <span>Css3</span>
                            </div>
                            <div className="progress-line css3">
                              <span></span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
    </>
  )
}

export default EducationSkills