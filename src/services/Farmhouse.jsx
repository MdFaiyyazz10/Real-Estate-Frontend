import React from 'react'
import '../services/Farmhouse.css'
import Nav from '../home/components/Nav'
import Contact from '../home/components/Contact'
import { Link } from 'react-router-dom'

function Farmhouse() {
    return (
        <>
            <Nav />

            <section id='intro_about'>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Farmhouse</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Farmhouse</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section id='farmhouse-sec1'>
                <li>Luxurious Farmhouse</li>
                <h2>
                    <strong>Discover Unmatched Luxury <br /> in Our Expansive <br /> Farmhouse Residences</strong>
                </h2>
                <br />
                <div>
                    <video autoPlay loop>
                        <source src="https://demo.vflyorions.in/builder/img/farmvideo.mp4" type="video/mp4" />
                    </video>
                    <br />
                    <p>Highland Builders & Developers offers an exceptional range of farmhouse options designed to provide a luxurious and serene living experience. Our farmhouses combine modern comforts with the charm of rural living, perfect for those seeking a retreat from the hustle and bustle of city life. Each farmhouse is thoughtfully designed to offer ample space, privacy, and a connection to nature, ensuring a peaceful and enjoyable lifestyle.
                        <br />
                        <br />
                        Highland Builders & Developers offers an exceptional range of farmhouse options designed to provide a luxurious and serene living experience. Our farmhouses seamlessly blend modern comforts with the timeless charm of rural living, making them perfect for those seeking a retreat from the hustle and bustle of city life. Each farmhouse is thoughtfully crafted to offer spacious layouts, ensuring ample room for both relaxation and entertainment. Our designs prioritize privacy and tranquility, creating a sanctuary where you can unwind and reconnect with nature. The farmhouses are nestled in picturesque locations, offering stunning views and a peaceful environment. Whether you're looking for a weekend getaway or a permanent residence, our properties provide the ideal setting to escape the daily grind.</p>
                </div>
            </section>

            <section id='farmhouse-sec2'>
                <li>Farmhouse</li>
                <h2><strong>Luxurious Features & <br /> Amenities</strong></h2>
                <div className='farmhouse-sec2_card'>
                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/interior-design1.png" alt="" />
                        </div>
                        <br />
                        <h3>Spacious Interiors</h3>
                        <p>Our farmhouses feature expansive living areas, high ceilings, and large windows that flood the rooms with natural light, creating an open and inviting atmosphere.
                        </p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/swimming-pool.png" alt="" />
                        </div>
                        <br />
                        <h3>Swimming Pool</h3>
                        <p>Enjoy your own private oasis with a beautifully designed swimming pool, perfect for cooling off, lounging in the sun, or hosting poolside gatherings with friends and family.</p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/park%201.png" alt="" />
                        </div>
                        <br />
                        <h3>Lush Gardens</h3>
                        <p>The property is surrounded by meticulously landscaped gardens, including manicured lawns, vibrant flower beds, and shaded seating areas, offering a tranquil and picturesque setting.
                        </p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/dumbbell.png" alt="" />
                        </div>
                        <br />
                        <h3>Fully-Equipped Gym</h3>
                        <p>Stay active and healthy with a fully-equipped gym that features the latest fitness equipment, providing everything you need for a complete workout experience at home.
                        </p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/playground1.png" alt="" />
                        </div>
                        <br />
                        <h3>Garden Playground</h3>
                        <p>A dedicated garden playground area for children, equipped with safe and fun play structures, allows young ones to enjoy outdoor activities in a secure environment.
                        </p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/sign%20(1).png" alt="" />
                        </div>
                        <br />
                        <h3>Game Zone</h3>
                        <p>An indoor game zone is available for entertainment, featuring various games and activities, perfect for leisure and socializing with family and friends.</p>
                    </div>

                </div>

            </section>

            <Contact />
        </>
    )
}

export default Farmhouse
