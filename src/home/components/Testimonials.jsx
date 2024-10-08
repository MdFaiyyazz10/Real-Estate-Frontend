import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/Testimonials.css';

function Testimonials() {
    return (
        <>
            <section id='testimonials'>
                <h2>MEET OUR TEAM</h2>
                <hr id='testimonial_hr' />
                <hr id='testimonial_hr' />
                <br />

                <section id="testimonial_item">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="testimonial_item">
                            <div className="testimonial_image-card">
                                <img className='img-fluid' src={testimonial.image} alt="" />

                                {/* Content Part */}
                                <div className="testimonial_card-content">
                                    <h3>{testimonial.title}</h3>
                                    <p>{testimonial.position}</p>
                                </div>

                                {/* Social Icons */}
                                <div className="social-media">
                                    {testimonial.social.map((socialIcon, index) => (
                                        <Link key={index} href={socialIcon.link} className="social-icon">
                                            <i className={socialIcon.icon}></i>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
}

const testimonialsData = [
    {
        title: "Mr.Ameen",
        position: "Engineer",
        image: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg",
        social: [
            { link: "#", icon: "fab fa-facebook-f" },
            { link: "#", icon: "fab fa-twitter" },
            { link: "#", icon: "fab fa-pinterest" }
        ]
    },
    {
        title: "Mr.Saif",
        position: "Associate",
        image: "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        social: [
            { link: "#", icon: "fab fa-facebook-f" },
            { link: "#", icon: "fab fa-twitter" },
            { link: "#", icon: "fab fa-pinterest" }
        ]
    },
    {
        title: "Mr.Ahad",
        position: "Manager",
        image: "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        social: [
            { link: "#", icon: "fab fa-facebook-f" },
            { link: "#", icon: "fab fa-twitter" },
            { link: "#", icon: "fab fa-pinterest" }
        ]
    },
    // Add more testimonial data here...
    {
        title: "Mrs.Bharti",
        position: "Jr.Manager",
        image: "https://plus.unsplash.com/premium_photo-1689629941068-d63f36e8bb8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        social: [
            { link: "#", icon: "fab fa-facebook-f" },
            { link: "#", icon: "fab fa-twitter" },
            { link: "#", icon: "fab fa-pinterest" }
        ]
    },
    // Add more testimonial data here...
];

export default Testimonials;
