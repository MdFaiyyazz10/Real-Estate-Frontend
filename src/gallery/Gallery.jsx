import React, { useEffect, useState } from 'react';
import '../gallery/Gallery.css';
import Nav from '../home/components/Nav';
import { Link } from 'react-router-dom';
import Contact from '../home/components/Contact';
import axios from 'axios';
import { backend } from '../App';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [getGallery, setGallery] = useState([]);

    const fetchGallery = async () => {
        try {
            const res = await axios.get(`${backend}/api/v1/gallery/all-gallery`);
            setGallery(res.data.galleryItems);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const openModal = (index) => {
        setSelectedImage(getGallery[index]); // Change here
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % getGallery.length; // Change here
        setSelectedImage(getGallery[nextIndex]); // Change here
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + getGallery.length) % getGallery.length; // Change here
        setSelectedImage(getGallery[prevIndex]); // Change here
        setCurrentIndex(prevIndex);
    };

    return (
        <>
            <Nav />
            <section id='intro_about'>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Gallery</li>
                        </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Gallery</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section id='hero_gallery1'>
                {getGallery.map((img, index) => (
                    <div
                        key={index}
                        className="gallery_card"
                        onClick={() => openModal(index)}
                        style={{
                            backgroundImage: `url(${img.image})`,
                        }}
                    >
                        <div className="gallery_card-footer">
                            <p>{img.title}</p>
                        </div>
                    </div>
                ))}
            </section>

            {selectedImage && (
                <div className="gallery-img_full">
                    <span className="gallery-img_full-close-btn" onClick={closeModal}>&times;</span>
                    <button className="gallery-img_full-prev-btn" onClick={handlePrev}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <img className="gallery-img_content" src={selectedImage.image} alt={selectedImage.title} />
                    <button className="gallery-img_full-next-btn" onClick={handleNext}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <div className="gallery-img_footer">
                        <h3>{selectedImage.title}</h3>
                    </div>
                </div>
            )}

            <section id='hero_gallery2'>
                <div>
                    <span>Connect Now</span>
                    <h3>Join Our Network and Never Miss Out</h3>
                </div>
                <div>
                    <span><i className="fa-regular fa-paper-plane"></i> <Link to="/contact">Connect Now</Link></span>
                </div>
            </section>

            <Contact />
        </>
    );
}

export default Gallery;
