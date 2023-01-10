import React from "react";
import Slider from "react-slick";
import CR1 from "../../../assets/Images/CustomerReview/DuyCao.jpeg";

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
                      className="img-fluid mx-auto profile-img img--size"
                      src={CR1}
                      alt="Review"
                    />
                  </Col>

                  <Col md={10} xs={12} className="customerP">
                    <p>
                      "Zakariye is a fast learner who adapts quickly to new tools
                      and technologies for his work. Besides that, I truly
                      appreciate his passion for optimizing web development to
                      create a unique customer experience. He has a lot of
                      potential to develop professionally, and he will be a
                      great asset to any company. All of this makes him a great
                      team player, good luck Zakariye!"
                    </p>
                    <div className="d-inline-block">
                      <span className="customerspan1">Duy Cao </span>
                      <span className="customerspan2"> - Manager for Addcomposite</span>
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
