import React, { useEffect, useState } from 'react';
import './css/Blog.css';
import Nav from '../home/components/Nav';
import Contact from '../home/components/Contact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { backend } from '../App';

// Array of blog items
const blogItems = [
    {
        imgSrc: "https://demo.vflyorions.in/builder/img/gal11.png",
        date: "August 15, 2024",
        title: "Why Invest in Agricultural Land? Insights from Highland Builders & Developers."
    },
    {
        imgSrc: "https://demo.vflyorions.in/builder/img/gal22.png",
        date: "August 15, 2024",
        title: "Prime Residential Plots: A Secure Path to Consistent Income and High-Value Appreciation."
    },
    {
        imgSrc: "https://demo.vflyorions.in/builder/assets/img/gal1.png",
        date: "August 15, 2024",
        title: "The Economic Potential of Dates Trees: An Investment for Agricultural Ventures."
    }
];

function Blog() {


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
            <Nav />
            {/* Intro Section */}
            <section id='intro_about'>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Blog Section 1 */}
            {/* <section id='blog-sec1'>
                {blogItems.map((item, index) => (
                    <div className="blog_item" key={index}>
                        <img className='img-fluid' src={item.imgSrc} alt={item.title} />
                        <div>
                            <i id='date' className="fa-solid fa-calendar-days">{item.date}</i>
                            <p>{item.title}</p>
                            <br />
                            <button className="blog_item-btn">
                                Read More
                                <div className="icon">
                                    <Link to="/about-blog"> <i className="fa-solid fa-arrow-right"></i> </Link>
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </section> */}


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



            <Contact />
        </>
    );
}

export default Blog;
