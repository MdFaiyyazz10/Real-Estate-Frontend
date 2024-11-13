import React, { useState } from 'react';
import '../css/pages/Admin.css';
import Adminnav from '../component/AdminNav';

function Admin() {

    return (
        <>
          <Adminnav/>
          <div className="container-fluid dashboard-container ">
  <div className="row">
    <div className="col-lg-12">
      <div className="dashboard-card">
        <div className="card-header">
          <div className="dashboard">
            <h4 className='dash-heading'>Dashboard</h4>
            <hr />
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 ">
             
                <div className="card-ms">
                  <h4>Total Members</h4>
                  <span className="round">
                  <img src="https://demo.vflyorions.in/builder/admin/assets/images/members.png" alt="" className='purple' id="icon" />
                  {/* <i class="fa-solid fa-users-line purple"  id="icon"></i> */}
                  </span>
                  <h2>4</h2>
                </div>
           
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
             
                <div className="card-ms">
                  <h4>Contact Inquiries</h4>
                  <span className="round">
                  
                  <img src="https://demo.vflyorions.in/builder/admin/assets/images/contactinquiries.png" alt="" className='orange' id="icon" /> 
                  {/* <i class="fa-solid fa-phone-volume orange" id="icon"></i> */}
                  </span>
                  <h2>1</h2>
                </div>
             
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              
                <div className="card-ms">
                  <h4>Total Turnover</h4>
                  <span className="round">
                  
                  <img src="https://demo.vflyorions.in/builder/admin/assets/images/royaltyincome.png" alt="" className='blue' id="icon" />
                    {/* <i className="fa-solid fa-user-plus blue" id="icon" />  */}
                  </span>
                  <h2>3</h2>
                </div>
             
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
             
                <div className="card-ms">
                  <h4>Total Support Ticket</h4>
                  <span className="round">
                  <img src="https://demo.vflyorions.in/builder/admin/assets/images/supportticket.png" alt="" className='green' id="icon" />
                    {/* <i className="fa-solid fa-user-plus green" id="icon" />  */}
                  </span>
                  <h2>12</h2>
                </div>
             
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
             
                <div className="card-ms">
                  <h4>Small Saving/Pigmy</h4>
                  <span className="round">
                  <img src="https://demo.vflyorions.in/builder/admin/assets/images/supportticket.png" alt="" className='red' id="icon" />
                    {/* <i className="fa-solid fa-piggy-bank red " id="icon" />  */}
                  </span>
                  <h2>13</h2>
                </div>
             
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
            
                <div className="card-ms">
                  <h4>Nominal Member</h4>
                  <span className="round">
                  <img src="https://demo.vflyorions.in/builder/admin/assets/images/clubincome.png" alt="" className='black' id="icon" />
                    {/* <i className="fa-solid black" id="icon" />  */}
                  </span>
                  <h2>12,463</h2>
                </div>
             
            </div>
           
          </div>                                        
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
}

export default Admin;
