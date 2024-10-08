import React, { useState, useRef, useEffect } from 'react';
import '../css/components/Testimonials1.css';

const Testimonials1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesRef = useRef(null);

    useEffect(() => {
        const slides = slidesRef.current;
        const totalSlides = slides.querySelectorAll('.testimonial_slider_card').length;

        slides.style.transition = 'transform 0.6s ease-in-out';
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, [currentSlide]);

    const moveSlide = (step) => {
        setCurrentSlide(prevSlide => {
            const totalSlides = slidesRef.current.querySelectorAll('.testimonial_slider_card').length;
            const newSlide = (prevSlide + step + totalSlides) % totalSlides;
            return newSlide;
        });
    };

    return (
        <>
            {/* <h2 className='text-center'>What Our Clients Says?</h2> */}
            <div id="home-testimonial_slider">
                <div className="home-testimonial_slider" ref={slidesRef}>
                    <div className="testimonial_slider_card">
                        <img src="https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png" alt="Testimonial 1" />
                        <div id='testimonial_rating'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        “Good idea in concept. However, twice I’ve booked MOT’s through formula 1. And in both instances the garage has called me afterwards saying they can’t fit me in....”
                        <br />
                        <strong>Person A</strong>
                    </div>
                    <div className="testimonial_slider_card">
                        <img src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944" alt="Testimonial 2" />
                        <div id='testimonial_rating'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        “I especially thankful for directors of kesar land all staff are supportive and cooperative they give me good attention whenever I feel problem they give all his 100% to me and also help me for bank loan.”
                        <br />
                        <strong>
                            Person B
                        </strong>
                    </div>
                    <div className="testimonial_slider_card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&s" alt="Testimonial 3" />
                        <div id='testimonial_rating'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        “Everyone wants a piece of land. It's the only sure investment it can never depreciate like other assets.”
                        <br />
                        <strong>
                            Person C
                        </strong>
                    </div>
                    <div className="testimonial_slider_card">
                        <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="Testimonial 4" />
                        <div id='testimonial_rating'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        “I have invested in one of the residential sectors and that too is affordable. Love the amenities out here and lovely posh society. The crowd is also good”
                        <br />
                        <strong>
                            Person D
                        </strong>
                    </div>
                </div>

                <button className="testimonial_prev" onClick={() => moveSlide(-1)}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>

                <button className="testimonial_next" onClick={() => moveSlide(1)}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </>
    );
};

export default Testimonials1;
