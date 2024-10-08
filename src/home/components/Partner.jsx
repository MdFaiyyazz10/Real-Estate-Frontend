import React, { useState } from "react";
import "../css/components/Partner.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../public/img/carousel-img1.jpg'
import img2 from '../../../public/img/carousel-img2.jpg'
import img3 from '../../../public/img/carousel-img3.jpg'
import img4 from '../../../public/img/carousel-img4.jpg'
import img5 from '../../../public/img/intro-bg.jpg'
import img6 from '../../../public/img/hero-img1.jpg'
import img7 from '../../../public/img/hero-img2.jpg'

function Partner() {
    const [activeImg, setActiveImg] = useState(img1); // default image to show in carousel

    // Array of images
    const images = [img1, img2, img3, img4, img5, img6, img7];

    return (
        <>
            <section id="partner-section">
                <div className="partner-heading">
                    <h2>OUR PARTNERS</h2>
                    <p>
                        Once in a lifetime opportunity to own an Estate in a gated community
                        of farmhouses in a scenic landscape surrounded by natural waterbodies!
                        <br />- Lake, Ponds, Waterfalls
                    </p>
                </div>

                {/* Carousel Section */}
                <div className="partner-carousel">
                    <Carousel showArrows={true} autoPlay={true} showThumbs={false} selectedItem={images.indexOf(activeImg)}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img className="partner-carousel_img" src={image} alt={`Partner ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Logos Section */}
                <div className="partner-logos">
                    {images.map((image, index) => (
                        <button id="partner-carousel_btn"
                            key={index}
                            className="partner-btn"
                            onMouseEnter={() => setActiveImg(image)}
                            onMouseLeave={() => setActiveImg(img1)}
                        >
                            <img className="partner-carousel_img" src={image} alt={`Partner Logo ${index + 1}`} />
                            <p>Partner {index + 1}</p>
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Partner;
