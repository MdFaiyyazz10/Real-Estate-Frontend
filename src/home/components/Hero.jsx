import React, { useEffect, useState } from 'react'
import '../css/components/Hero.css'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import axios from "axios";
import { backend } from "../../App";



function Hero() {

     // Latest Blogs
     const [blog, setBlog] = useState([]);

     const fetchBlogs = async () => {
         try {
             const response = await axios.get(`${backend}/api/v1/blog/get-latest-blog`);
             console.log(response);
             setBlog(response.data.blogs); 
         } catch (error) {
             console.error( error);
         }
     };
 
     useEffect(() => {
         fetchBlogs();
     }, []);

    return (
        <>
            <section id='home_hero'>

                <section id='home_inner-hero' className='container'>
                    <h5>PROJECT HIGHLIGHT</h5>
                    <h2>Prime Locations for Prosperous Living</h2>

                    <div id='home-hero_project_card'>

                        <div className="home-hero_project_card">
                            <img src="https://demo.vflyorions.in/builder/assets/img/location%2002.png" alt="" />
                            <br />
                            <br />
                            <span><strong>Strategically Located</strong></span>
                            <br />
                            <p>Our properties are situated in prime locations that offer easy accessibility and proximity to key amenities, ensuring both convenience and connectivity for residents and businesses.</p>
                        </div>
                        <div className="home-hero_project_card">
                            <img src="https://demo.vflyorions.in/builder/assets/img/peaceful%2002.png" alt="" />
                            <br />
                            <br />
                            <span><strong>Peaceful Surroundings</strong></span>
                            <br />
                            <p> Enjoy the serenity of well-planned landscapes meant to provide a calm refuge from the rush and bustle of city life, ideal for rest and renewal.</p>
                        </div>
                        <div className="home-hero_project_card">
                            <img src="https://demo.vflyorions.in/builder/assets/img/community%20development.png" alt="" />
                            <br />
                            <br />
                            <span><strong>Community Development</strong></span>
                            <br />
                            <p>Invest in areas that contribute to overall community growth and development, with a focus on creating vibrant, sustainable neighborhoods.</p>
                        </div>
                        <div className="home-hero_project_card">
                            <img src="https://demo.vflyorions.in/builder/assets/img/peaceful%20surrounding%2001.png" alt="" />
                            <br />
                            <br />
                            <span><strong>Scenic Beauty</strong></span>
                            <br />
                            <p>Real estate and Embrace the organic beauty of our landscapes, which are crafted to blend in with the surroundings and offer breathtaking views, improving the standard of living for every one of our clients.</p>
                        </div>

                    </div>
                    <hr />
                </section>


                <div id='home_video' className='container'>
                    <ReactPlayer width="100%" url={'https://www.youtube.com/watch?v=QTwqEZX70PY&t=22s'} controls={true} />
                </div>

                {/* <div id='our-blog'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1716807335226-dfe1e2062db1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div>
                        <h2>Our Blogs</h2>
                        <p>we specialize in connecting you with the perfect plots to build your future. Whether you're looking for a serene retreat, a bustling urban lot, or a spacious family home site, our diverse range of properties caters to all needs and budgets. With a dedicated team of experts, we guide you through every step of the purchasing process, ensuring you find not just land, but a canvas for your dreams. Explore our listings today and take the first step toward realizing your vision!</p>
                        <button className="home-hero1_btn"> <Link to="/blog">Blogs</Link>  </button>
                    </div>
                </div> */}
              <section id='blog-sec1'>
                {blog.map((item, index) => (
                    <div className="blog_item" key={index}>
                        <img className='img-fluid' src={item.image} alt={item.title} />
                        <div>
                            {/* <i id='date' className="fa-solid fa-calendar-days">{{new Date(item.date).toLocaleDateString()}}</i> */}
                            <i id='date' className="fa-solid fa-calendar-days">{new Date(item.date).toLocaleDateString()}</i>

                            <p>{item.title}</p>
                            <br />
                            <button className="blog_item-btn">
                                Read More
                                <div className="icon">
                                    <Link to={`/blog/${item.slug}`} > <i className="fa-solid fa-arrow-right"></i> </Link>
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </section>
    
            </section>
        </>
    )
}

export default Hero
