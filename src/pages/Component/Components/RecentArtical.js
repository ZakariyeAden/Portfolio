import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import Slider from "react-slick";
import R1 from "../../../assets/Images/RecentArtical/R1.png";
import R2 from "../../../assets/Images/RecentArtical/R2.png";
import R3 from "../../../assets/Images/RecentArtical/R3.png";
import R4 from "../../../assets/Images/RecentArtical/R4.png";
import { FaPlus } from "react-icons/fa";

const settings = {
  autoplay: false,
  autoplaySpeed: 2500,
  dots: false,
  aroow: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 570,
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
export const RecentArtical = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <>
      <div className="main-art headding">
        <div className="exp ">
          <h1 className="text-center title">Recent Articles</h1>
        </div>
        <Container>
          <div className="insta">
            <Slider {...settings}>
              {/* IMG_1 */}
              <div className="blog">
                <div className="recent ">
                  <img className="img-fluid mx-auto" alt="footer1" src={R1} />
                  <div className="blog-post-hover">
                    <div className="blog-icon" onClick={() => setShow1(true)}>
                      <div className="icon ">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
                  show={show1}
                  onHide={() => setShow1(false)}
                  centered
                  aria-labelledby="contained-modal-title-vcenter"
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <img className="img-fluid mx-auto" alt="footer1" src={R1} />
                  </Modal.Body>
                </Modal>
                <div className="textblock1 text-center">
                  <p>12/AUG/2020 - BY ADMIN</p>
                  <h1>
                    They Now Bade Farewell To The Kind But Unseen People...
                  </h1>
                </div>
              </div>
              {/* IMG_2 */}

              <div className="blog">
                <div className="recent ">
                  <img className="img-fluid mx-auto" alt="footer1" src={R2} />
                  <div className="blog-post-hover">
                    <div className="blog-icon" onClick={() => setShow2(true)}>
                      <div className="icon ">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
                  show={show2}
                  onHide={() => setShow2(false)}
                  centered
                  aria-labelledby="contained-modal-title-vcenter"
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <img className="img-fluid mx-auto" alt="footer1" src={R2} />
                  </Modal.Body>
                </Modal>
                <div className="textblock1 text-center">
                  <p>12/AUG/2020 - BY ADMIN</p>
                  <h1>
                    They Now Bade Farewell To The Kind But Unseen People...
                  </h1>
                </div>
              </div>
              {/* IMG_3 */}

              <div className="blog">
                <div className="recent ">
                  <img className="img-fluid mx-auto" alt="footer1" src={R3} />
                  <div className="blog-post-hover">
                    <div className="blog-icon" onClick={() => setShow3(true)}>
                      <div className="icon ">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
                  show={show3}
                  onHide={() => setShow3(false)}
                  centered
                  aria-labelledby="contained-modal-title-vcenter"
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <img className="img-fluid mx-auto" alt="footer1" src={R3} />
                  </Modal.Body>
                </Modal>
                <div className="textblock1 text-center">
                  <p>12/AUG/2020 - BY ADMIN</p>
                  <h1>
                    They Now Bade Farewell To The Kind But Unseen People...
                  </h1>
                </div>
              </div>
              {/* IMG_4 */}

              <div className="blog">
                <div className="recent ">
                  <img className="img-fluid mx-auto" alt="footer1" src={R4} />
                  <div className="blog-post-hover">
                    <div className="blog-icon" onClick={() => setShow4(true)}>
                      <div className="icon ">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
                  show={show4}
                  onHide={() => setShow4(false)}
                  centered
                  aria-labelledby="contained-modal-title-vcenter"
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <img className="img-fluid mx-auto" alt="footer1" src={R4} />
                  </Modal.Body>
                </Modal>
                <div className="textblock1 text-center">
                  <p>12/AUG/2020 - BY ADMIN</p>
                  <h1>
                    They Now Bade Farewell To The Kind But Unseen People...
                  </h1>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default RecentArtical;
