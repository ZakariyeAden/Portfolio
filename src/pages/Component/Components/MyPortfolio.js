import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { PortfolioImg } from './PortfolioImg'
import Masony from "react-masonry-component";
import Aos from "aos";
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
  const [currentActive, setCuttentActive] = useState(0);
  const filterItem = (categItem, tabIndex) => {
    const updateItem = PortfolioImg.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItem(updateItem);
    setCuttentActive(tabIndex);
  }
  return (

    <>
      <div className="main-portfolio headding" id="Potfolio">
        <Container>
          <div className="portfolio">
            <h1 className="text-center port-title">My portfolio</h1>
            <div className="port-menu text-center">
              <ul className="port-list port-tab text-center">
                <li className={currentActive === 0 ? "active" : ""}>
                  <span onClick={() => { setItem(PortfolioImg); setCuttentActive(0) }}> All</span>
                </li>
                <li className={currentActive === 1 ? "active" : ""}>
                  <span onClick={() => filterItem('Branding', 1)}> Branding</span>
                </li>
                <li className={currentActive === 2 ? "active" : ""}>
                  <span onClick={() => filterItem('photography', 2)}> photography</span>
                </li>
                <li className={currentActive === 3 ? "active" : ""}>
                  <span onClick={() => filterItem('fashion', 3)}>Fashion</span>
                </li>
                <li className={currentActive === 4 ? "active" : ""}>
                  <span onClick={() => filterItem('product', 4)}>product </span>
                </li>
              </ul>
            </div>
            <div>
              <Masony
                className={"photo-list row"}
                elementType={"ul"}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {items.map((photo) => (
                  <li className={`photo-item col-md-4 col-sm-6 col-12`} key={photo.id}>
                    <img src={photo.image} alt="" data-aos="fade-in"
                      data-aos-duration="3000" className="img-fluid mx-auto portfolooimgeffect" />
                  </li>
                ))}
              </Masony>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default MyPortfolio


