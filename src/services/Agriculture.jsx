import React from 'react'
import Nav from '../home/components/Nav'
import { Link } from 'react-router-dom'
import Contact from '../home/components/Contact'

function Agriculture() {
    return (
        <>
            <Nav />
            {/* these section css comes from commercialplot page css */}
            <section id='intro_about'>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Agriculture Plots</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Agriculture Plots</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section id='commercial-plot-sec1'>
                <div className='commercial-plot_img'>
                    <img src="/img/agricultureplot.png" alt="" />
                </div>
                <div className='commercial-plot_content'>
                    <li>Agro Expert</li>
                    <h2><strong>The Benefits of Owning Agricultural Land: Financial, Ecological, and Personal Rewards</strong></h2>
                    <br />
                    <p>
                        One of the most significant benefits of owning agricultural land is the potential for financial returns. Agricultural land can be used to grow crops, raise livestock, or lease to farmers, all of which can generate income. The value of the land may also appreciate over time, making it a sound long-term investment.
                        <br />
                        <br />
                        Additionally, agricultural land provides the opportunity to diversify one's investment portfolio, as it tends to be less volatile compared to other types of real estate or stock market investments. Beyond the financial aspects, owning agricultural land can offer a sense of fulfillment and connection to nature, as well as the potential for involvement in sustainable farming practices that support local food systems and environmental conservation.
                        <br />
                        <br />
                        Whether used for personal agricultural work or as a leased asset, agricultural properties hold the promise of both economic and ecological benefits, making them a worthwhile consideration for investors and farming enthusiasts alike.
                    </p>
                </div>
            </section>

            <section id='commercial-plot-sec2'>
                <li className='text-center'>Agriculture Plots</li>
                <h2 className='text-center'><strong> Benefits of Agricultural Properties </strong></h2>

                <div>
                    <div className="commercial-plot-sec2_cards">
                        <img src="https://demo.vflyorions.in/builder/img/income.png" alt="" />
                        <h4>Income Generation</h4>
                        <p>Agricultural properties can produce steady income through crop sales, livestock production, or leasing the land to farmers.</p>
                    </div>
                    <div className="commercial-plot-sec2_cards">
                        <img src="https://demo.vflyorions.in/builder/img/apriciation.png" alt="" />
                        <h4>Appreciation</h4>
                        <p>Over time, the value of agricultural land can increase, providing significant returns on investment.</p>
                    </div>
                    <div className="commercial-plot-sec2_cards">
                        <img src="https://demo.vflyorions.in/builder/img/tax.png" alt="" />
                        <h4>Tax Advantages</h4>
                        <p>Various tax incentives and deductions are available for agricultural landowners, including deductions for expenses related to farming operations.</p>
                    </div>
                    <div className="commercial-plot-sec2_cards">
                        <img src="https://demo.vflyorions.in/builder/img/Sustainability%20(1).png" alt="" />
                        <h4>Sustainability</h4>
                        <p>Investing in agricultural land can promote sustainable farming practices and contribute to food security.</p>
                    </div>
                </div>
            </section>

            {/* this section css comes from farmhouse page css */}
            <section id='farmhouse-sec2'>
                <li>Agricultural Plot</li>
                <h2><strong>Types of Agricultural <br /> Properties</strong></h2>
                <div className='farmhouse-sec2_card'>
                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/field.png" alt="" />
                        </div>
                        <br />
                        <h3>Cropland</h3>
                        <p>Land dedicated to growing crops such as grains, vegetables, fruits, and other agricultural produce. This type of land is highly dependent on soil quality, climate, and water availability.</p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/fields.png" alt="" />
                        </div>
                        <br />
                        <h3>Pastureland</h3>
                        <p>Land used for grazing livestock such as cattle, sheep, and goats. This type of property requires good grass coverage and water sources to sustain the animals.</p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/orchard.png" alt="" />
                        </div>
                        <br />
                        <h3>Orchards</h3>
                        <p>Specialized cropland where fruit trees or nut trees are grown. Orchards require specific climates and soil conditions, along with regular maintenance and pest control.
                        </p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/vineyard.png" alt="" />
                        </div>
                        <br />
                        <h3>Vineyards</h3>
                        <p>Land dedicated to growing grapevines for wine production. Vineyards require particular soil types, climate conditions, and extensive care to produce high-quality grapes.
                        </p>
                    </div>

                    <div className="farmhouse-sec2_cards">
                        <div>
                            <img src="https://demo.vflyorions.in/builder/img/farm.png" alt="" />
                        </div>
                        <br />
                        <h3>Mixed-Use Farms</h3>
                        <p>Properties that combine various agricultural uses, such as crop cultivation, livestock rearing, and sometimes even aquaculture. These farms offer diversified income streams.
                        </p>
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

            <Contact/>
        </>
    )
}

export default Agriculture
