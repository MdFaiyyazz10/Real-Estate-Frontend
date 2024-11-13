import React, { useState } from 'react';
import "../style/AgentWelcomeLetter.css"
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';
import toast from 'react-hot-toast';

const AgentWelComeLetter = () => {
    const {name , createdAt} = useSelector(state => state.user.agent);

    const joiningDate = new Date(createdAt).toLocaleDateString();

    // Download Welcome Letter  PDF 
    const handleDownload = () => {
        const element = document.getElementById('welcome-letter');
        
        // Start generating the PDF and then show the success toast
        html2pdf()
            .from(element)
            .save('WelcomeLetter.pdf')
            .then(() => {
                toast.success('PDF downloaded successfully!');
            })
            .catch(() => {
                toast.error('Failed to download PDF.');
            });
    };

    return (
        <div id="welcome-letter" className='welcome-letter-Agent-container2'>
            <h4 className='m-3'>WELCOME LETTER</h4>
            <hr />
           

            <div className=' text-start welcome-letter-heading-content'>
               <span> Date : {joiningDate}</span>
               <p className='fw-bold mt-3'> Highland Builders And Developers</p>
            </div>

            <div className='text-start '>
               
               <p className='fw-bold mt-5'> Dear {name} </p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus, culpa deleniti dolorum adipisci nesciunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, earum!</p>
            </div>
            <div>
            <p className='text-start fw-bold mt-5'> Designation : <span className='fw-normal'>Sales Executive</span> </p>
            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora alias architecto repudiandae modi a necessitatibus impedit, voluptatibus atque ab quas.</p>
            </div>

            <div className=' text-start fw-bold mt-5'>
             
               <p className='fw-bold '>  With Best Wishes And Regards</p>
               <p className='fw-bold '> Highland Builders And Developers</p>
            </div>

            <button className="btn btn-danger ps-5 pe-5 " onClick={handleDownload}>Download</button>
        </div>
    );
};

export default AgentWelComeLetter;
