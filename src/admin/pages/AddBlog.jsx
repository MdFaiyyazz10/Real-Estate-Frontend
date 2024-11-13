import React, { useState } from 'react';
import '../css/pages/AddBlog.css';
import axios from 'axios';
import { backend } from '../../App';
import toast from 'react-hot-toast';
import Adminnav from '../component/AdminNav';

const AddBlog = () => {
    const [blogFormData, setBlogFormData] = useState({ title: '', content: '', image: null });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        if (e.target.id === 'image') {
            setBlogFormData({ ...blogFormData, image: e.target.files[0] });
        } else {
            setBlogFormData({ ...blogFormData, [e.target.id]: e.target.value });
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('title', blogFormData.title);
        formData.append('content', blogFormData.content);
        formData.append('image', blogFormData.image);

        try {
            const res = await axios.post(`${backend}/api/v1/blog/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            toast.success(res.data.message);
            setBlogFormData({ title: '', content: '', image: null });
        } catch (error) {
            const errorMessage = error.response?.data.message || 'An error occurred';
            toast.error(errorMessage);
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Adminnav />
            <div className='add-blog-container1'>
                <h4 className='m-3 add-blog'>Add Blog</h4>
                <hr />
                <form id='add-blog-sec' onSubmit={submitHandler}>
                    <label className='add-blog-img-imp'>
                        <input type="file" className='add-blog-file-input' onChange={changeHandler} id='image' />
                        <i className="fa-solid fa-cloud-arrow-up add-blog-upload-icon"></i>
                        <p> Drop files here or click to upload.</p>
                    </label>
                    <div className='add-blog-sec-content'>
                        <h5 className='add-blog-img-name'>Blog Name</h5><br />
                        <input className='add-blog-inpu-name' type="text" onChange={changeHandler} id='title' /><br />
                        <h5 className='add-blog-desc-name'>Blog Description</h5><br />
                        <textarea className='add-blog-inpu-name-des' onChange={changeHandler} id='content'></textarea>
                        {error && <p className='error-message'>{error}</p>}
                        <button className='add-blog-sec-button' disabled={loading}>
                            {loading ? 'Adding...' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddBlog;
