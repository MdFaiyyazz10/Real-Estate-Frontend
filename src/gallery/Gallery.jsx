import React, { useState } from 'react';
import '../gallery/Gallery.css';
import Nav from '../home/components/Nav';
import { Link } from 'react-router-dom';
import Contact from '../home/components/Contact';

const images = [
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery1.png', name: 'Date Palm Field at Sunset' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery2.png', name: 'Date Palm Land Cultivation' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery3.png', name: 'Desert Date Farm' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery4.png', name: 'Date Palm Seedlings' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery5.png', name: 'Dry Land Date Farming' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery6.png', name: 'Harvested Land' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery7.png', name: 'Date Palm Grove' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery8.png', name: 'Date Palm Tree Close-Up' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery9.png', name: 'Date Harvesting' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery10.png', name: 'Date Palm Field at Sunset' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery11.png', name: 'Irrigated Date Plantation' },
    { src: 'https://demo.vflyorions.in/builder/assets/img/gallery12.png', name: 'Date Palm Rows' },
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
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

            {/* Hero gallery section */}
            <section id='hero_gallery1'>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="gallery_card"
                        onClick={() => openModal(index)}
                        style={{
                            backgroundImage: `url(${img.src})`,
                        }}
                    >
                        <div className="gallery_card-footer">
                            <p>{img.name}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Modal for viewing full image */}
            {selectedImage && (
                <div className="gallery-img_full">
                    <span className="gallery-img_full-close-btn" onClick={closeModal}>&times;</span>
                    <button className="gallery-img_full-prev-btn" onClick={handlePrev}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <img className="gallery-img_content" src={selectedImage.src} alt={selectedImage.name} />
                    <button className="gallery-img_full-next-btn" onClick={handleNext}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <div className="gallery-img_footer">
                        <h3>{selectedImage.name}</h3>
                    </div>
                </div>
            )}

            {/* Hero gallery section 2 */}
            <section id='hero_gallery2'>
                <div>
                    <span>Connect Now</span>
                    <h3>Join Our Network and Never Miss Out</h3>
                </div>
                <div>
                    <span><i className="fa-regular fa-paper-plane"></i> <Link to="/contact">Connect Now</Link> </span>
                </div>
            </section>

            <Contact />
        </>
    );
}

export default Gallery;
