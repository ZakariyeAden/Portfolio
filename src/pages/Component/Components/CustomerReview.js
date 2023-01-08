import React from "react";
import Slider from "react-slick";
import CR1 from "../../../assets/Images/CustomerReview/CR1.png";
import CR2 from "../../../assets/Images/CustomerReview/CR2.png";
import CR3 from "../../../assets/Images/CustomerReview/CR3.png";

import { Container, Row, Col } from "react-bootstrap";
const CustomerReview = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    aroow: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="main-review headding" id="Blog">
        <Container>
          <div className=" textblock">
            <Slider {...settings}>
              <div>
                <Row className="customerReview">
                  <Col md={2} xs={12}>
                    <img
                      className="img-fluid mx-auto img-circle img--size"
                      src={CR1}
                      alt="Review"
                    />
                  </Col>

                  <Col md={10} xs={12} className="customerP">
                    <p>
                      Sed elit quam, iaculis sed semper sit amet udin vittheae
                      nibi at magna akal semperFusce commodo molestie elit quam,
                      iaculis sed sempsum Dolort tusima olatiup udin vitae magna
                      semperFusceSed elit quam, iaculis sed semper udin vitae
                      nibh. at magna akal semperFusce.
                    </p>
                    <div className="d-inline-block">
                      <span className="customerspan1">Mr.John Doe </span>
                      <span className="customerspan2"> - Designer</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="customerReview">
                  <Col md={2} xs={12}>
                    <img
                      className="img-fluid mx-auto img-circle  img--size"
                      src={CR2}
                      alt="Review"
                    />
                  </Col>

                  <Col md={10} xs={12} className="customerP">
                    <p>
                      Sed elit quam, iaculis sed semper sit amet udin vittheae
                      nibi at magna akal semperFusce commodo molestie elit quam,
                      iaculis sed sempsum Dolort tusima olatiup udin vitae magna
                      semperFusceSed elit quam, iaculis sed semper udin vitae
                      nibh. at magna akal semperFusce.
                    </p>
                    <div className="d-inline-block">
                      <span className="customerspan1">Mr.John Doe </span>
                      <span className="customerspan2"> - Designer</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="customerReview">
                  <Col md={2} xs={12}>
                    <img
                      className="img-fluid mx-auto img-circle  img--size"
                      src={CR3}
                      alt="Review"
                    />
                  </Col>

                  <Col md={10} xs={12} className="customerP">
                    <p>
                      Sed elit quam, iaculis sed semper sit amet udin vittheae
                      nibi at magna akal semperFusce commodo molestie elit quam,
                      iaculis sed sempsum Dolort tusima olatiup udin vitae magna
                      semperFusceSed elit quam, iaculis sed semper udin vitae
                      nibh. at magna akal semperFusce.
                    </p>
                    <div className="d-inline-block">
                      <span className="customerspan1">Mr.John Doe </span>
                      <span className="customerspan2"> - Designer</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CustomerReview;
