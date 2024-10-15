import React from 'react';
import "../css/pages/AddGallery.css";

const AddGallery = () => {
    return (
        <>
            <div className='container1'>
                <h4 className='m-3'>Add Gallery Image</h4>
                <hr />
                <div id='admin-gallery-sec'>
                    <label className='img-imp'>
                        <input type="file" className='file-input' />
                        <i className="fa-solid fa-cloud-arrow-up upload-icon"></i>
                        <p> Drop files here or click to upload.</p>
                    </label>
                    <div className='gallery-sec-content'>
                        <h5 className='img-name'>Image Name</h5> <br />
                        <input className='inpu-name' type="text" /><br />
                        <button className='gallery-sec-button'>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddGallery;
