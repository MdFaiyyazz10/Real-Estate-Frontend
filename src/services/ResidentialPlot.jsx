import React from 'react'
import '../services/ResidentialPlot.css'
import Nav from '../home/components/Nav'
import Contact from '../home/components/Contact'
import { Link } from 'react-router-dom'

const ResidentialPlot = () => {
  return (
    <>
      <Nav />
      <section id='intro_about'>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">Residential Plots</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Residential Plots</li>
            </ol>
          </nav>
        </div>
      </section>


      {/* this section css comes from farmhouse page css */}
      <section id='residential-plot_sec'>
        <div className='residential-plot-card_content'>
          <li>Plots Expert</li>
          <br />
          <h2><strong>Prime Residential Plots for <br /> Your Dream Home</strong></h2>
          <p>Residential properties are primarily designed as living spaces and include houses, apartments, condos, and townhouses where individuals and families reside. These properties provide essential housing needs and offer various lifestyle benefits to residents. For some, residential properties are not only a place to live but also a significant investment opportunity. An investment property, purchased to generate a return on investment, can provide rental income or potential profit through property resale. The versatility of residential properties makes them a popular choice for both personal use and investment purposes. Whether you're looking to buy a home to live in or seeking to invest in real estate, understanding the different types of residential properties, their benefits, and key considerations is essential for making informed decisions.</p>
        </div>
        <div className='residential-plot-card_img'>
          <img src="https://demo.vflyorions.in/builder/img/residentialplot.png" alt="" />
        </div>
      </section>

      <section id='farmhouse-sec2'>
        <li>Residential Plots</li>
        <br />
        <h2><strong>Explore Our Residential Plot <br /> Options</strong></h2>
        <div className='farmhouse-sec2_card'>

          <div className="farmhouse-sec2_cards">
            <div>
              <img src="https://demo.vflyorions.in/builder/img/family.png" alt="" />
            </div>
            <br />
            <h3>Single-Family</h3>
            <p>These are the most common type for traditional homebuilding. They are designed for one house and offer space for private yards and gardens.
            </p>
          </div>

          <div className="farmhouse-sec2_cards">
            <div>
              <img src="https://demo.vflyorions.in/builder/img/building.png" alt="" />
            </div>
            <br />
            <h3>Duplexes/Triplexes</h3>
            <p>Important for higher-density housing developments, such as apartment complexes or duplexes. These plots are crucial in urban areas where space is limited.
            </p>
          </div>

          <div className="farmhouse-sec2_cards">
            <div>
              <img src="https://demo.vflyorions.in/builder/img/townhouse.png" alt="" />
            </div>
            <br />
            <h3>Townhouse</h3>
            <p>Popular in planned communities or urban areas, they provide a balance between space and density, making efficient use of available land.</p>
          </div>

        </div>

      </section>

      {/* ********accordion*********** */}

      <section id='residential-plot-sec_accordion'>
        <div className="accordion accordion-flush container" id="accordionFlushExample">
          <li>Residential Plots</li>
          <div className='residential'>
            <h1>Frequently Asked Questions</h1>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What types of residential plots do you offer?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">We offer a range of residential plots including single-family, multi-family, townhouse, mixed-use, corner, and cul-de-sac plots. Each type caters to different needs and preferences.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How do I choose the right plot for my needs?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Consider factors such as plot size, location, and intended use. Single-family plots offer privacy, multi-family plots support higher density, and townhouse plots are ideal for compact living. Our team can assist you in selecting the best option based on your requirements.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How do I start the process of buying a plot?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Begin by contacting us to express your interest. We’ll provide detailed information, arrange site visits, and assist with the necessary paperwork and approvals to complete your purchase.</div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}

export default ResidentialPlot