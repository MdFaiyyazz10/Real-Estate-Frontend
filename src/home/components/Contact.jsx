import React from 'react'
import '../css/components/Contact.css'

function Contact() {
    return (
        <>
            <section id='upper-footer'>
                <div>
                    <h1><strong>Looking for a dream home?</strong></h1>
                    <h6>We can help you realize your dream of a new home</h6>
                    <br />
                    <button id='upper-footer_btn'>
                        <span>Expolre Properties <i className="fa-solid fa-arrow-right"></i></span>
                    </button>
                </div>
            </section>

            <footer id='home_footer' className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h4>Quick Link</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Payment Center</a></li>
                                        <li><a href="#">Contact Directory</a></li>
                                        <li><a href="#">Forms</a></li>
                                        <li><a href="#">News and Updates</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h4><span>R</span>eal <span>S</span>tate</h4>
                                    <p>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat metus tortor eget magna. Donec mattis posuere pharetra Donec vestibulum.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="footer-pad">
                                    <h4>Contact</h4>
                                    <ul className="list-unstyled">
                                        <li><i className="fa-solid fa-phone"></i> +91 7219518561</li>
                                        <li><i className="fa-regular fa-envelope"></i> saadansari78912@gmail.com</li>
                                        <li><i className="fa-solid fa-map-location-dot"></i> Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 footer-pad">
                                <h4>Follow Us</h4>
                                <ul className="social-network social-circle">
                                    <li><a href="#" className="icoFacebook" title="Facebook"><i
                                        className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="icoLinkedin" title="Linkedin"><i
                                        className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#" className="icoInstagram" title="Linkedin"><i
                                        className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>

                            {/* this is agent login button code for now it is commented  */}
                            {/* <div className="col-md-2">
                                <div className="footer-pad">
                                    <button className="agent_acc_btn" role="button">
                                        <a href="#"> <span>Agents</span> </a>
                                    </button>
                                </div>
                            </div> */}

                        </div>
                        <hr id='footer_hr' />
                        <div className="row">
                            <div id='contact_copyright' className="col-md-12">
                                <p>&copy; Copyright 2018 - Company Name. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Contact
