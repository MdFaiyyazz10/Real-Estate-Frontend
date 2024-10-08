import React from 'react'
import '../services/CommercialPlot.css'
import Nav from '../home/components/Nav'
import Contact from '../home/components/Contact'
import { Link } from 'react-router-dom'

function CommercialPlot() {
    return (
        <>
            <Nav />
            <section id='intro_about'>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Commercial Plots</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Commercial Plots</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section id='commercial-plot-sec1'>
                <div className='commercial-plot_img'>
                    <img src="https://demo.vflyorions.in/builder/img/commercialplot.png" alt="" />
                </div>
                <div className='commercial-plot_content'>
                    <li>Plots Expert</li>
                    <h2><strong>Discover Prime Locations for Your Business Success with Prime Plots Realty</strong></h2>
                    <br />
                    <p>
                        Commercial property is real estate that is used for business activities. This broad category has various types of properties, each serving different business purposes. Primarily, commercial property refers to buildings that house businesses, such as office buildings, retail spaces, and industrial facilities.
                        <br />
                        However, it also includes land that is utilized to generate profit, such as agricultural land, and large residential rental properties. These properties are designed to accommodate income-generating activities and are typically leased to tenants. Commercial real estate is a vital part of the business ecosystem, providing essential infrastructure for enterprises to operate and grow.
                        <br />
                        It offers substantial investment opportunities, often yielding higher returns compared to residential properties due to longer lease terms and higher rental rates. The dynamic nature of commercial properties, driven by economic trends and market demands, makes it a complex but rewarding investment sector.
                    </p>
                </div>
            </section>

            <section id='commercial-plot-sec2'>
                <li className='text-center'>Commercial Plots</li>
                <h2 className='text-center'><strong> Benefits of Investing in Commercial Plots </strong></h2>

                <div>
                    <div className="commercial-plot-sec2_cards">
                        <img src="https://demo.vflyorions.in/builder/img/customization1.png" alt="" />
                        <h4>Customization Flexibility</h4>
                        <p>Our commercial plots offer the flexibility to customize and design your space according to specific business needs.</p>
                    </div>
                    <div className="commercial-plot-sec2_cards">
                        <img src="https://demo.vflyorions.in/builder/img/roi.png" alt="" />
                        <h4>High ROI Potential</h4>
                        <p>Explanation of how the location and infrastructure can lead to higher returns on investment.</p>
                    </div>
                    <div className="commercial-plot-sec2_cards">
                        <img src="https://demo.vflyorions.in/builder/img/stratergylocation.png" alt="" />
                        <h4>Strategic Location</h4>
                        <p>Highlight how the plots are situated in an area poised for growth and development.</p>
                    </div>
                    <div className="commercial-plot-sec2_cards">
                        <img src="https://demo.vflyorions.in/builder/img/businessgrowth.png" alt="" />
                        <h4>Business Growth Opportunities</h4>
                        <p>Discussion on how the location can support the growth of different types of businesses (retail, offices, warehouses, etc.).</p>
                    </div>
                </div>
            </section>

            <section id='commercial-plot-sec3'>
                <li className='text-center'>Commercial Plots</li>
                <h2 className='text-center'><strong>Why Choose Our <br /> Commercial Plots?</strong></h2>
                <br />

                <div className="commercial-plot-sec3">
                    <div className="commercial-plot-sec3_cards">
                        <div className="icon-container">
                            <i className="fas fa-award"></i>
                        </div>
                        <h3>Strategic Locations</h3>
                        <p className="commercial-plot-sec3_cards_dec">Our commercial plots are located in areas with high growth potential, excellent connectivity, and close proximity to essential amenities, ensuring that your business can thrive in a competitive market.</p>
                    </div>
                    <div className="commercial-plot-sec3_cards">
                        <div className="icon-container">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Expert Team</h3>
                        <p className="commercial-plot-sec3_cards_dec">Each plot is equipped with essential utilities such as electricity, water, and internet connectivity, along with well-developed access roads, making them ready for immediate development.</p>
                    </div>
                    <div className="commercial-plot-sec3_cards">
                        <div className="icon-container">
                            <i className="fas fa-smile"></i>
                        </div>
                        <h3>Flexible Plot Sizes</h3>
                        <p className="commercial-plot-sec3_cards_dec">We offer a range of plot sizes and configurations to accommodate different types of businesses, from retail outlets and office spaces to warehouses and manufacturing units.</p>
                    </div>
                </div>

            </section>

            <section id='commercial-plot-sec4'>
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
    )
}

export default CommercialPlot
