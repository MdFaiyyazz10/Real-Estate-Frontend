import React from 'react'
import '../css/components/Hero3.css'
import '../../index.css'
import { Link } from 'react-router-dom'

function Hero3() {
    return (
        <>
            {/* Hero1 Container 1 */}
            
            <section id='hero3-main'>
                <h2 className='text-center'><strong>About Us</strong></h2>
                <div id='hero3'>
                    <div className="hero3-card">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFib3V0JTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>

                    <div className="hero3-card">
                        <h2>Welcome to PHONETICS TECHNOSOFT</h2>
                        <p><strong> - LARGE PLOTS STARTING AT
                            <span> <i> HALF ACRE TO 2.5 ACRES</i> </span> -
                        </strong></p>
                        <p>
                            Once in a lifetime opportunity to own an Estate in a gated community of farmhouses in a scenic landscape surrounded by natural waterbodies - Lake, Ponds, Waterfalls Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio tenetur, dolore odit saepe aliquam sunt similique impedit laboriosam! Dolorem repellat modi quas. Reiciendis lorem43.
                        </p>

                        <div className="hero3-card2">
                            <div>
                                <li> <i className="fa-solid fa-check"></i> &nbsp; Years Experience</li>
                                <li> <i className="fa-solid fa-check"></i> &nbsp; Happy Clients</li>
                                <li> <i className="fa-solid fa-check"></i> &nbsp; Most Trustworthy</li>
                                <li> <i className="fa-solid fa-check"></i> &nbsp; Expert Work</li>
                            </div>
                            <div>
                                <h6><span>4</span> <br /> Years Of <br /> Experience</h6>
                            </div>
                        </div>
                        <button className="home-hero1_btn"> <Link to="/about">Read More</Link> </button>
                    </div>
                </div>
            </section>


            {/* Hero1 Container 2 */}
            <section id='hero3-sec2'>
                <h2 className='text-center'>
                    <strong>SECURE YOUR FUTURE <br /> WITH SMART INVESTMENTS</strong>
                </h2>
                <hr id='hero1_hr' />
                <hr id='hero1_hr' />

                <div id='hero1-card-sec'>

                    <div className="hero1-card">
                        <div className="hero1-card_detail">
                            <div>
                                <img src="/img/hero-img1.jpg" alt="" />
                                <p><strong>Farmhouse Living</strong></p>
                            </div>
                            <div className="hero1-card_content">
                                <p>Benefit from significant appreciation on farmland investments, leveraging our long-standing legacy and expertise to maximize your capital growth.</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero1-card">
                        <div className="hero1-card_detail">
                            <div>
                                <img src="/img/310.jpg" alt="" />
                                <p><strong>Lifetime Income Generation</strong></p>
                            </div>
                            <div className="hero1-card_content">
                                <p>Invest in Highland Builders & Developers to acquire secure and dependable revenue streams via valuable farmland that yields dependable returns from the cultivation of dates and fruits.</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero1-card">
                        <div className="hero1-card_detail">
                            <div>
                                <img src="/img/hero-img2.jpg" alt="" />
                                <p><strong>Diverse Investment Options</strong></p>
                            </div>
                            <div className="hero1-card_content">
                                <p>Explore a variety of investment choices, such as residential plots, commercial points, and farmhouses, all customized for your financial goals and preferences.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <br />
            </section>
        </>
    )
}

export default Hero3
