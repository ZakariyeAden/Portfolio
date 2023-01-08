import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer headding" id="Contact">
          <div className="footer-head">
            <Container>
              <div className="py-5 text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                  width="100% auto"
                  height="350px"
                  frameBorder="0"
                  title="Iframe"
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>

              <Row>
                <Col lg={6} md={12}>
                  <div className="f-left">
                    <div className="f-content">
                      <h1 className="F-contact">Contact Us</h1>
                      <h1 className="f-text">Let's Discuss Your project</h1>
                    </div>
                    <div className="">
                      <h6 className="f-icon">
                        <i className="icon">
                          <BsTelephone size={20} />
                        </i>
                        <span>+911234567890</span>
                      </h6>
                      <h6 className="f-icon">
                        <i className="icon">
                          <BsEnvelope size={20} />
                        </i>
                        <span>company@example.com</span>
                      </h6>
                      <h6 className="f-icon">
                        <i className="icon">
                          <BiMap size={20} />
                        </i>
                        <span>Demo A - 2 Puffin Street,Puffinville, USA</span>
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} className="f-end">
                
                   <Row>
              <Col xl={12} md={12} lg={12} sm={12}>
                <div>
               
                <form className="row g-3 needs-validation formContactus">
                  <div className="col-md-6  col-sm-6 col-6">
                    <input
                      type="text"
                      className="form-control inputbox "
                      id="validationCustom01"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-6  col-sm-6 col-6">
                    <input
                      type="text"
                      className="form-control inputbox"
                      id="validationCustom01"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <input
                      type="text"
                      className="form-control inputbox"
                      id="validationCustom02"
                      placeholder="E-mail"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                  <input
                      type="text"
                      className="form-control inputbox "
                      id="validationCustom01"
                      placeholder="Subject"
                      required
                    />
                    </div>
                 
                  <div className="col-md-12">
                    <textarea
                      type="text"
                      className="form-control inputboxmessage inputbox"
                      id="validationCustom03"
                      placeholder="Meassage*"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a Send Meassage.
                    </div>
                  </div>

                  <div className="col-12 ">
                    <button className="send-btn button float-start">Send Message</button>
                  </div>
                </form>
                </div>
              </Col>
            </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
        <div className="f-link">Copyright © 2021. All Rights Reserved.</div>
      </>
    );
  }
}
