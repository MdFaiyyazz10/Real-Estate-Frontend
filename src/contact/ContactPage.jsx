import React, { useState } from 'react'
import './ContactPage.css'
import Nav from '../home/components/Nav'
import Contact from '../home/components/Contact'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { backend } from '../App'

function ContactPage() {

  const [formData , setFormData] = useState({});

  const handleChange  = (e) => {
    setFormData({...formData , [e.target.name]: e.target.value})
  }

  const submitForm = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(`${backend}/api/v1/user/message` , formData , {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      }
      }).then((response) => {
        // console.log(response)
        toast.success(response.data.message)
        
      })
      
    } catch (error) {
      // console.log(error)
      toast.error(error.response.data.message)
      
    }
  }

  console.log(formData)


  return (
    <>
      <Nav />


      <section id='intro_about'>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </section>


      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact_form_inner">
                      <form className="contact_field" onSubmit={submitForm}>
                        <h2><strong>Contact Us</strong></h2>
                        <p>Feel free to contact us any time. We will get back to you as soon as we can!
                        </p>
                        <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleChange} />
                        <input type="tel" className="form-control" placeholder="Mobile Number"
                          name="phoneNumber" onChange={handleChange} />
                        <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} />
                        <textarea className="form-control" placeholder="Message" name="message" onChange={handleChange}></textarea>
                        <button className="contact_form_submit" name="submit">Send</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="contact_info_sec">
                <h4>Contact Info</h4>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-headset"></i>
                  <span>+91 7219518561</span>
                </div>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-envelope-open-text"></i>
                  <span>saadansari78912@gmail.com</span>
                </div>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-map-marked-alt"></i>
                  <span>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="socil_item_inner d-flex">
                  <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda,
                  expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem
                  sequi ab porro, quia error.</p>
                <div className="map_bind">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5518839592805!2d79.18383727380316!3d21.209953281533345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c744890a46a5%3A0xa8833d74998f0178!2sTaj%20Hotel%20And%20Family%20Restaurant!5e0!3m2!1sen!2sin!4v1725788329278!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <Contact />
    </>
  )
}

export default ContactPage
