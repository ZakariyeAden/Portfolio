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
                      Web Developer Intern
                      <p>2022 - 2023 | Part Time | Addcomposite</p>
                    </Card.Title>
                    <hr />
                    <Card.Text className="exp-text">
                      Work on developing, maintaining and improving their
                      Websites to being fully responsive.Collobarte and worked
                      alonged with my supervisior or leader.
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
                      Freelance Web Developer
                      <p>2021 - Present | Full Time | Fiverr</p>
                    </Card.Title>
                    <hr />
                    <Card.Text className="exp-text">
                      Building Frontend User interface for clients who want
                      portfolio or clone of website which inspired there
                      interest! Building their dream projects and making it
                      affordable for them.
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
