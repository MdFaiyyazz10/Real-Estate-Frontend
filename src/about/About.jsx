import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import Nav from '../home/components/Nav'
import Contact from '../home/components/Contact'
import ReactPlayer from 'react-player'

function About() {
  return (
    <>
      <Nav />

      {/* Hero Intro section */}
      <section id='intro_about'>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </section>


      {/* Hero about section 1 */}
      <section id='hero_about1'>
        <h2 className='text-center'> <strong>BUILDING A LEGACY OF TRUST AND GROWTH</strong> </h2>

        <div id='hero_about1_video' className='container'>
          <video autoPlay muted loop>
            <source src='https://demo.vflyorions.in/builder/img/highlandfinalban3.mp4' />
          </video>
        </div>

      </section>

      {/* Hero about section 2 */}
      <section id='hero_about2'>

        <div id='hero_about2-heading'>
          <li>Empowering Growth</li>
          <br />
          <h2>Where Business Meets <br /> Opportunity</h2>
        </div>

        <div id='hero_about2-inner-sec'>

          <div id='hero_about2-inner1'>
            <img id='hero_about2-img' className='img-fluid' src="https://demo.vflyorions.in/builder/img/about%20image%202.jpg" alt="" />
          </div>

          <div id='hero_about2-inner2'>

            <h1>Building a Legacy of Trust and Growth</h1>
            <br />
            <h6>At Highland Builders & Developers, we are committed to creating sustainable and profitable business opportunities, backed by decades of experience and a rich legacy. Our approach combines community impact, career creation, and customer satisfaction, ensuring long-term growth for investors and clients alike. With a focus on innovation and excellence, we offer a diverse range of plots and agricultural opportunities designed to meet the evolving needs of our clients.</h6>
            <br />

            <div>

              <div className="hero_about2-inner2_card">
                <h5><strong> <i className="fa-solid fa-angles-right"></i> Profitability with Purpose</strong></h5>
                <h6>We offer not just profitable investments but also contribute to community development.</h6>
              </div>

              <div className="hero_about2-inner2_card">
                <h5><strong> <i className="fa-solid fa-angles-right"></i> Sustainable Income Streams</strong></h5>
                <h6>Our projects generate reliable, long-term income through innovative and sustainable practices.</h6>
              </div>

              <div className="hero_about2-inner2_card">
                <h5><strong> <i className="fa-solid fa-angles-right"></i> Exceptional Customer Benefits</strong></h5>
                <h6>Enjoy benefits like monthly cashback, agricultural income, and complimentary resort memberships.</h6>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* Hero about section 3 */}
      <section id='hero_about3'>
        <div>
          <h2>We’re Just a Message Away</h2>
          <br />
          <span> <Link to="/contact">Connect with us</Link> </span>
        </div>
      </section>

      {/* Hero about section 4 */}
      <section id='hero_about4'>
        <h2 className='text-center'><strong>BUILD YOUR DREAM HOME</strong></h2>
        <br />
        <br />
        <div id='hero-about4_content'>

          <div className='hero-about4-card-content'>

            <div className='hero_about4-card'>
              <div>
                <div id='hero_about4-card_name'>
                  <img src="https://demo.vflyorions.in/builder/assets/img/abtlocicon.png" alt="" /> &nbsp; &nbsp;
                  <h4 className='text-center'>Ideal Locations</h4>
                </div>
                <br />
                <h6> Our plots are located in great places that are easy to reach and close to important services. This makes them perfect for both living and running a business.</h6>
              </div>
            </div>

            <div className='hero_about4-card'>
              <div id='hero_about4-card_name'>
                <img src="https://demo.vflyorions.in/builder/assets/img/abtresicon.png" alt="" /> &nbsp; &nbsp;
                <h4>Resort-Like Amenities</h4>
              </div>
              <br />
              <h6>Enjoy living with great amenities that feel like a resort. We offer a gym for workouts, a playground for kids, and other facilities that make life more enjoyable and comfortable.</h6>
            </div>

            <div className='hero_about4-card'>
              <div id='hero_about4-card_name'>
                <img src="https://demo.vflyorions.in/builder/assets/img/plot.png" alt="" /> &nbsp; &nbsp;
                <h4>Spacious Plots with Lush Greenery</h4>
              </div>
              <br />
              <h6>  Our large plots are surrounded by beautiful, green areas. They offer plenty of space and a peaceful environment, making them a great spot for building a home or a farm.</h6>
            </div>

          </div>

          <div className='hero_about4-card-img'>
            <img src="https://demo.vflyorions.in/builder/assets/img/about2.png" alt="" />
          </div>

          <div className='hero-about4-card-content'>

            <div className='hero_about4-card'>
              <div id='hero_about4-card_name'>
                <img src="https://demo.vflyorions.in/builder/assets/img/abtprodicon.png" alt="" /> &nbsp; &nbsp;
                <h6>Dates Production</h6>
              </div>
              <br />
              <h6> If you’re interested in farming, our land is perfect for growing dates. This can provide a steady income and is a good way to make money from agriculture.</h6>
            </div>

            <div className='hero_about4-card'>
              <div id='hero_about4-card_name'>
                <img src="https://demo.vflyorions.in/builder/assets/img/abtfarmicon.png" alt="" /> &nbsp; &nbsp;
                <h5>High-Value Appreciation on Farmland</h5>
              </div>
              <br />
              <h6>   Investing in our farmland means your property is likely to increase in value over time. It’s a smart investment that can provide good returns in the future.</h6>
            </div>

            <div className='hero_about4-card'>
              <div id='hero_about4-card_name'>
                <img src="https://demo.vflyorions.in/builder/assets/img/abtagricon.png" alt="" /> &nbsp; &nbsp;
                <h5>Access to Modern Agricultural Technology and Support</h5>
              </div>
              <br />
              <h6>    We provide the latest farming technology and expert help to make sure your farming efforts are successful and efficient. This support helps you get the most out of your land.</h6>
            </div>

          </div>

        </div>

      </section>


      <Contact />
    </>
  )
}

export default About
