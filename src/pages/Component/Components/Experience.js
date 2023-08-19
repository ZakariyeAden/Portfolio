import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Experience = () => {
  return (
    <>
      <div id="Experience" className="exp-main headding">
        <div className="exp ">
          <h1 className="text-center title">Experience</h1>
        </div>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <div className="exp-card" data-aos="flip-left">
                <Card className="exp-block">
                  <Card.Body className="exp-body">
                    <Card.Title className="exp-title">
                      Freelance Web Developer
                      <p>2022 - Present | Full Time | Fiverr</p>
                    </Card.Title>
                    <hr />
                    <Card.Text className="exp-text">
                      Collaborating closely with a client, I contributed to
                      enhancing their law portfolio website by implementing HTML
                      and CSS.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div className="exp-card" data-aos="flip-left">
                <Card className="exp-block">
                  <Card.Body className="exp-body">
                    <Card.Title className="exp-title">
                      Full Stack Engineer Student
                      <p>2023 - 2023 | Full Time | Prime Digital Academy</p>
                    </Card.Title>
                    <hr />
                    <Card.Text className="exp-text">
                      Full-time on campus work including solo projects, client
                      projects, group projects, weekend projects, code
                      challenges, public presentations, and discussion panels
                      with various technology speakers.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div className="exp-card" data-aos="flip-left">
                <Card className="exp-block">
                  <Card.Body className="exp-body">
                    <Card.Title className="exp-title">
                      Web Developer Intern
                      <p>2022 - 2023 | Part Time | Addcomposite</p>
                    </Card.Title>
                    <hr />
                    <Card.Text className="exp-text">
                      Worked on developing, maintaining, and improving their
                      website to be fully responsive. Designed multiple websites
                      on Figma and pitched improvements to new and existing
                      features.Collobarte and worked alonged with my supervisior
                      or leader.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Experience;
