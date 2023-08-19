import React, { useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import I1 from "../../../assets/Images/Services/I1.png";
import I2 from "../../../assets/Images/Services/I2.png";
import I3 from "../../../assets/Images/Services/I3.png";
import I4 from "../../../assets/Images/Services/I4.png";
import I5 from "../../../assets/Images/Services/I5.png";
import I6 from "../../../assets/Images/Services/I6.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="main-service headding" id="Service">
        <Container>
          <div className="service ">
            <h1 className="text-center service-title">My Services</h1>
            <Row className="g-4">
              <Col
                xl={4}
                lg={4}
                md={4}
                sm={6}
                xs={12}
                className="service-block"
              >
                <Card
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <Card.Body>
                    <Card.Title>
                      <img
                        alt="serviceImage"
                        className="img-fluid mx-auto"
                        src={I1}
                      />
                    </Card.Title>
                    <Card.Subtitle className="cardtitle ">
                      Web Development
                    </Card.Subtitle>
                    <Card.Text className="service-text">
                      Web development is the building and maintenance of
                      websites; it's the work that happens behind the scenes to
                      make a website look great, work fast and perform well with
                      a seamless user experience.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={4}
                sm={6}
                xs={12}
                className="service-block"
              >
                <Card
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <Card.Body>
                    <Card.Title>
                      <img
                        alt="serviceImage"
                        className="img-fluid mx-auto"
                        src={I4}
                      />
                    </Card.Title>
                    <Card.Subtitle className="cardtitle">
                      Web Design
                    </Card.Subtitle>
                    <Card.Text className="service-text">
                      Designing user interface on Figma and using inspirations
                      tools such as Dribble.
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={4}
                sm={6}
                xs={12}
                className="service-block"
              >
                <Card
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <Card.Body>
                    <Card.Title>
                      <img
                        alt="serviceImage"
                        className="img-fluid mx-auto"
                        src={I2}
                      />
                    </Card.Title>
                    <Card.Subtitle className="cardtitle">
                      Web Hosting and Authentication
                    </Card.Subtitle>
                    <Card.Text className="service-text">
                      Capable hosting websites on Heroku.Able to
                      implement security for users to gain access to their
                      accounts by using library passport.
                      <br/>
                      <br/>
                      <br/>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Service;
