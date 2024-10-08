import React from 'react'
import Nav from '../home/components/Nav'
import Contact from '../home/components/Contact'
import { Link } from 'react-router-dom'
import './Project.css'

function Project() {
    return (
        <>
            <Nav />

            {/* Intro section */}
            <section id='intro_about'>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Project</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Project</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Project Intro section */}
            <section id='project-sec1' className='container'>
                <div id='project-inner_sec1'>
                    <img className='img-fluid' src="https://demo.vflyorions.in/builder/assets/img/projectimg.jpeg" alt="" />
                </div>

                <div id='project-inner_sec2'>
                    <h1><strong>Secure Your Future, <br /> Cultivate Your Legacy.</strong></h1>
                    <br />
                    <h6>Today, everyone wants to increase their income sources and grow their wealth, which drives people to seek better investment opportunities for the future. Nowadays, real estate is widely recognized as one of the best investment options, and many people are investing in it. In response to this trend, our Highland Builders and Developers are launching a new project focused on farming and farmhouses. This initiative allows our customers to directly earn money from their respective plots.
                    </h6>
                    <button className="home-hero1_btn"> Invest Now  </button>
                </div>
            </section>

            <section id='project-sec2' className='container'>
                <h1 className='text-center'>
                    <strong>Loving your Garden <br /> & Landscape.</strong>
                </h1>
                <br />
                <br />
                <div id='project2-inner_sec1'>
                    <div className="project2-inner_sec1_card">
                        <img src="https://demo.vflyorions.in/builder/assets/img/datetreeplantation.png" alt="" />
                        <br />
                        <br />
                        <h4>Dates Trees Plantation</h4>
                        <p>Extensive plantation of around 3000 dates trees, providing a sustainable source of income.</p>
                    </div>
                    <div className="project2-inner_sec1_card">
                        <img src="https://demo.vflyorions.in/builder/assets/img/abtresicon.png" alt="" />
                        <br />
                        <br />
                        <h4>Farmhouse and Agriculture Premise</h4>
                        <p>Sprawling 50-acre property dedicated to farming and luxurious farmhouse living.</p>
                    </div>
                    <div className="project2-inner_sec1_card">
                        <img src="https://demo.vflyorions.in/builder/assets/img/luxuriousfarmhouse.png" alt="" />
                        <br />
                        <br />
                        <h4>Luxurious Farmhouse</h4>
                        <p>A lavish farmhouse 10,000 sq. ft. featuring a swimming pool, garden, and top-notch amenities.</p>
                    </div>
                    <div className="project2-inner_sec1_card">
                        <img src="https://demo.vflyorions.in/builder/assets/img/dryfruits.png" alt="" />
                        <br />
                        <br />
                        <h4>Dry Fruits & Cold Storage Unit</h4>
                        <p>On-site facility for preserving and processing dry fruits, ensuring freshness and quality.</p>
                    </div>
                    <div className="project2-inner_sec1_card">
                        <img src="https://demo.vflyorions.in/builder/assets/img/globalsales.png" alt="" />
                        <br />
                        <br />
                        <h4>Global Sales of Dates</h4>
                        <p>Worldwide distribution of fresh and dry dates, tapping into international markets for higher returns.</p>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    )
}

export default Project
