import React from 'react'
import '../css/components/Intro.css'

function Intro() {
    return (
        <>
            <section id="intro-main">

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div id="intro_icon">

                        <button className="intro_icon_i">
                            <i className="fa-brands fa-instagram"></i>
                        </button>

                        <button className="intro_icon_i">
                            <i className="fa-brands fa-facebook"></i>
                        </button>

                        <button className="intro_icon_i">
                            <i className="fa-brands fa-whatsapp"></i>
                        </button>

                        <button className="intro_icon_i">
                            <i className="fa-brands fa-twitter"></i>
                        </button>

                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img/carousel-img1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-img2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-img3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-img4.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div id='intro-main_bottom'>
                    <div className='intro-main_bottom1'> <img src="https://images.unsplash.com/photo-1658492988855-2a3f254f7710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHx2aWxsYXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <div className='intro-main_bottom2'>
                        <div className='intro-main_bottom_icon'>
                            <a href="tel: +917219518561"  >
                            <i className="fa-solid fa-phone"></i>
                            </a>
                        </div>
                        <h5>It's time for a look that reflects the real you! Contact Now
                            <br />
                            <strong>Phone: +012 345 6780</strong>
                        </h5>
                    </div>
                </div>


                {/* <div id="intro_hr">
                        <h1>Land!</h1> 
                        <h1>Secure Your <span> <i> <strong>Future</strong> </i> </span> with Smart <br /> Investments <span>!</span></h1>
                        <hr />
                    </div> */}
            </section>
        </>
    )
}

export default Intro
