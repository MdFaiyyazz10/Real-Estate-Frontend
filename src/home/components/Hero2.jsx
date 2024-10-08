import React from 'react'
import '../css/components/Hero2.css'
import Testimonials1 from './Testimonials1'

function Hero2() {
    return (
        <>
            <div className='text-center'>
                <h1 id='property-types_heading'><strong>PROPERTY TYPES</strong></h1>
                <p>  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br /> vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>

            <br />
            <hr id='hero1_hr' />
            <hr id='hero1_hr' />
            <br />

            <section id='home-hero1-main'>
                <div id='home-hero1-testimonial'>
                    <Testimonials1 /> {/* giving one mediaquery to this testimonial in hero2 css file */}
                </div>


                <div id='home-hero1' className='text-center'>
                    <div className="home-hero1_card">
                        <div>
                            <i className="fa-solid fa-city"></i>
                            <span> <strong>Villa</strong> </span>
                            <span>123 Properties</span>
                        </div>
                    </div>
                    <div className="home-hero1_card">
                        <div>
                            <i className="fa-solid fa-house"></i>
                            <span> <strong>Home</strong> </span>
                            <span>123 Properties</span>
                        </div>
                    </div>
                    <div className="home-hero1_card">
                        <div>
                            <i className="fa-solid fa-house-laptop"></i>
                            <span> <strong>Office</strong> </span>
                            <span>123 Properties</span>
                        </div>
                    </div>
                    <div className="home-hero1_card">
                        <div>
                            <i className="fa-regular fa-building"></i>
                            <span> <strong>Building</strong> </span>
                            <span>123 Properties</span>
                        </div>
                    </div>
                    <div className="home-hero1_card">
                        <div>
                            <i className="fa-solid fa-tents"></i>
                            <span> <strong>Townhouse</strong> </span>
                            <span>123 Properties</span>
                        </div>
                    </div>
                    <div className="home-hero1_card">
                        <div>
                            <i className="fa-solid fa-shop"></i>
                            <span> <strong>Shop</strong> </span>
                            <span>123 Properties</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id='home-hero1-sec2'>
                <div>
                    <img className='img-fluid' src="https://img.freepik.com/premium-vector/professional-customer-support-service-contact-us-concept-image_1324816-46197.jpg?size=626&ext=jpg&ga=GA1.1.160347971.1693649943&semt=ais_hybrid" alt="" />
                </div>
                <div>
                    <div>
                        <h1>Contact With Our Certified Agent</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nulla! Odit?</p>
                        <button className="home-hero1_btn"> Make A call  </button>
                        <button className="home-hero1_btn"> Get Appointment  </button>
                    </div>
                </div>
            </section>

            <section id='home-hero1-sec3'>
                <h3>Contact Us</h3>
                <form>
                    <div>
                        <div>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="number" placeholder='Number' />
                        </div>
                        <div>
                            <textarea placeholder='Message' rows={5} id=""></textarea>
                        </div>
                    </div>
                    <button className="home-hero1-sec3_btn" type='submit'> Submit  </button>
                </form>
            </section>
        </>
    )
}

export default Hero2
