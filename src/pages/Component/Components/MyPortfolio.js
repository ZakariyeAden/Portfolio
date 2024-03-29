import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { PortfolioImg } from "./PortfolioImg";
import Masony from "react-masonry-component";
import Aos from "aos";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineWebAsset } from "react-icons/md";
import "aos/dist/aos.css";
const masonryOptions = {
  fitWidth: false,

  itemSelector: ".photo-item",
};

export const MyPortfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [items, setItem] = useState(PortfolioImg);
  return (
    <>
      <div className="main-portfolio headding" id="Potfolio">
        <Container>
          <div className="portfolio">
            <h1 className="text-center port-title">My Projects</h1>
            <div>
            <Masony
                className={"photo-list row"}
                elementType={"ul"}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {items.map(photo => (
                  <li
                    className={`photo-item col-md-4 col-sm-6 col-12 `}
                    key={photo.id}
                  >
                        <img
                          src={photo.image}
                          alt="Projects"
                          data-aos="fade-in"
                          data-aos-duration="3000"
                          className="img-fluid mx-auto portfolooimgeffect"
                        />
                        <p className="photo-description mt-3">
                          {photo.description}
                        </p>
                        <div className="d-flex">
                          <a
                            href={photo.github}
                            target="_blank"
                            className="f-icon"
                          >
                            <i className="icon-">
                              <AiFillGithub />
                            </i>
                          </a>
                        </div>
                  </li>
                ))}
            </Masony>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyPortfolio;
