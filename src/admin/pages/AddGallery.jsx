import React, { useState } from 'react';
import axios from 'axios';
import "../css/pages/AddGallery.css";
import toast from 'react-hot-toast';
import { backend } from '../../App';

const AddGallery = () => {
    const [galleryFormData, setGalleryFormData] = useState({ title: '', image: null });
    const [loading, setLoading] = useState(false); 

    const changeHandler = (e) => {
        if (e.target.id === 'image') {
            setGalleryFormData({ ...galleryFormData, image: e.target.files[0] }); 
        } else {
            setGalleryFormData({ ...galleryFormData, [e.target.id]: e.target.value });
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true); 

        const formData = new FormData();
        formData.append('title', galleryFormData.title);
        formData.append('image', galleryFormData.image);

        try {
            const res = await axios.post(`${backend}/api/v1/gallery/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true
            });

            toast.success(res.data.message);
           
            setGalleryFormData({ title: '', image: null });
        } catch (error) {
            toast.error(error.response?.data.message || 'An error occurred');
            console.log(error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className='add-gallery-container1'>
            <h4 className='m-3'>Add Gallery Image</h4>
            <hr />
            <form onSubmit={submitHandler} id='add-gallery-sec' >
                
                    <label className='add-gallery-img-imp'>
                        <input 
                            type="file" 
                            className='add-gallery-file-input' 
                            id='image' 
                            onChange={changeHandler} 
                        />
                        <i className="fa-solid fa-cloud-arrow-up add-gallery-upload-icon"></i>
                        <p> Drop files here or click to upload.</p>
                    </label>
                    <div className='add-gallery-sec-content'>
                        <h5 className='add-gallery-img-name'>Image Name</h5><br />
                        <input 
                            className='add-gallery-inpu-name' 
                            type="text" 
                            id='title' 
                            value={galleryFormData.title} 
                            onChange={changeHandler} 
                        /><br />
                        <button className='add-gallery-sec-button' disabled={loading}>
                            {loading ? 'Adding...' : 'Add'}
                        </button>
                    </div>
            </form>
        </div>
    );
};

export default AddGallery;
