import { Component, useRef} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import emailjs from 'emailjs-com'
import { AiFillLinkedin } from "react-icons/ai";

const sendEmail = (e) => {
  
  e.preventDefault();
  emailjs.sendForm('service_5beecz3', 'template_om9th2p', e.target, 'rNWW6X0pGrhjIhndN')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer headding" id="Contact" >
          <div className="footer-head">
            <Container>
              <div className="py-5 text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45179.65210897231!2d-93.40459696119716!3d44.94919189511647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6200078f30f23%3A0x5627e36e3b3f2834!2sSt%20Louis%20Park%2C%20MN!5e0!3m2!1sen!2sus!4v1673207867805!5m2!1sen!2sus"
                  width="100% auto"
                  height="350px"
                  frameBorder="0"
                  title="Iframe"
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
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
                      <a href="tel:6124425173">
                        <i className="icon">
                          <BsTelephone size={20} />
                        </i> 
                        </a>
                        <span>612-442-5173</span>
                      </h6>
                      <h6 className="f-icon">
                      <a href="mailto:zakariyeadenn@gmail.com">
                        <i className="icon">
                          <BsEnvelope size={20} />
                        </i>
                        </a>
                        <span>zakariyeadenn@gmail.com</span>
                      </h6>
                      <h6 className="f-icon">
                        <i className="icon">
                          <BiMap size={20} />
                        </i>
                        <span>Saint Louis Park, MN, USA</span>
                      </h6>
                      <h6 className="f-icon">
                      <a href="https://www.linkedin.com/in/zakariyeaden/" target="_blank">
                        <i className="icon">
                          <AiFillLinkedin size={20} />
                        </i>
                        </a>
                        <span>LinkedIn</span>
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} className="f-end">
                  <Row>
                    <Col xl={12} md={12} lg={12} sm={12}>
                      <div>
                        <form className="row g-3 needs-validation formContactus"  onSubmit={sendEmail}>
                          <div className="col-md-6  col-sm-6 col-6">
                            <input
                              type="text"
                              name="name"
                              className="form-control inputbox "
                              id="validationCustom01"
                              placeholder="Name"
                              required
                            />
                          </div>
                          <div className="col-md-6  col-sm-6 col-6">
                            <input
                              type="text"
                              name="phone"
                              className="form-control inputbox"
                              id="validationCustom01"
                              placeholder="Phone"
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-6">
                            <input
                              type="text"
                              name="message"
                              className="form-control inputbox"
                              id="validationCustom02"
                              placeholder="E-mail"
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-6">
                            <input
                              type="text"
                              name="subject"
                              className="form-control inputbox "
                              id="validationCustom01"
                              placeholder="Subject"
                              required
                            />
                          </div>

                          <div className="col-md-12">
                            <textarea
                              type="text"
                              name="message"
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
                            <button className="send-btn button float-start">
                              Send Message
                            </button>
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
