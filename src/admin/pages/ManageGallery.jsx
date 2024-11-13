import React, { useState, useEffect } from 'react';
import "../css/pages/ManageGallery.css";
import "../css/pages/ManageGalleryPopupPage.css";
import axios from 'axios';
import { backend } from '../../App';
import toast from 'react-hot-toast';
import Adminnav from '../component/AdminNav';

const ManageGallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deletedId, setDeleteId] = useState(null);
    const [editingItem, setEditingItem] = useState({ title: '', image: null });
    const [allGalleries, setAllGalleries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchGallery = async () => {
        try {
            const res = await axios.get(`${backend}/api/v1/gallery/get-all-gallery`);
            setAllGalleries(res.data.galleryItems);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const deleteHandler = async () => {
        setLoading(true);
        try {
            const res = await axios.delete(`${backend}/api/v1/gallery/delete/${deletedId}`, {
                withCredentials: true
            });
            fetchGallery();
            setDeleteModal(false);
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response?.data.message || 'An error occurred');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const editHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', editingItem.title);
        if (editingItem.image) {
            formData.append('image', editingItem.image);
        }

        setLoading(true);
        try {
            const res = await axios.put(`${backend}/api/v1/gallery/update/${editingItem._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            fetchGallery();
            setShowModal(false);
            toast.success(res.data.message);
            setEditingItem({ title: '', image: null });
        } catch (error) {
            toast.error(error.response?.data.message || 'An error occurred');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // Filtered gallery based on search query
    const filteredGallery = allGalleries.filter(gallery => 
        gallery.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination calculations
    const totalEntries = filteredGallery.length;
    const totalPages = Math.ceil(totalEntries / entriesPerPage);
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredGallery.slice(indexOfFirstEntry, indexOfLastEntry);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEntriesPerPageChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };

    return (
        <>
        <Adminnav />
            <div className='manage-gallery-container2' style={{ opacity: showModal ? 0.5 : 1 }}>
                <h4 className='m-3'>Manage Gallery</h4>
                <hr />
                <div className='manage-gallery-sec'>
                    <div className='heading-1 col-2'>
                        <label style={{display:"inline"}} htmlFor="show">Show:-</label>
                        <select onChange={handleEntriesPerPageChange}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <div className='heading-2 col-6'>
                        <span>Entries:-</span>
                    </div>
                    <div className='heading-3 col-4'>
                        <label className="gallery-manage-search-bar" htmlFor="search">Search :-</label>
                        <input className="gallery-manage-search-bar-input" type="search" value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </div>

                <div className='manage-gallery-content'>
                    <table className='galler-manage-table'>
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.map((gallery, index) => (
                                <tr key={gallery._id}>
                                    <td>{index + 1 + indexOfFirstEntry}</td>
                                    <td>{gallery.title}</td>
                                    <td>
                                        <img style={{ height: "5rem", width: "10rem" }} src={gallery.image} alt={gallery.title} />
                                    </td>
                                    <td>
                                        <button
                                            id='manage-gall_edit-btn'
                                            type="button"
                                            className="btn btn-success m-3 Edit"
                                            onClick={() => {
                                                setEditingItem({ ...gallery, image: null });
                                                setShowModal(true);
                                            }}>
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setDeleteId(gallery._id);
                                                setDeleteModal(true);
                                            }}
                                            className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='blog-manage-pagination'>
                    <p>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries</p>
                    <nav aria-label="Page navigation example manage-gallery-page">
                        <ul className="pagination justify-content-right">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className="page-link" onClick={() => handlePageChange(currentPage - 1)} href="#">Previous</a>
                            </li>
                            {[...Array(totalPages)].map((_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <a className="page-link" onClick={() => handlePageChange(i + 1)} href="#">{i + 1}</a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <a className="page-link" onClick={() => handlePageChange(currentPage + 1)} href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {showModal && 
                <MyModal 
                    setShowModal={setShowModal} 
                    editingItem={editingItem} 
                    setEditingItem={setEditingItem} 
                    editHandler={editHandler} 
                    loading={loading} 
                />
            }
            {deleteModal && <MyDelete setDeleteModal={setDeleteModal} deleteHandler={deleteHandler} loading={loading} />}
        </>
    );
};

const MyModal = ({ setShowModal, editingItem, setEditingItem, editHandler, loading }) => {
    return (
        <div className='manage-gallery-popup-modal'>
            <div className='manage-gallery-popup-container1'>
                <h4 className='m-3 manage-gallery-popup'>Edit Gallery Image</h4>
                <i className="fa-sharp fa-regular fa-circle-xmark manage-gallery-popup-cross" onClick={() => setShowModal(false)}></i>
                <hr />
                <form onSubmit={editHandler}>
                    <div id='manage-gallery-popup-sec'>
                        <label className='manage-gallery-img-import'>
                            <input
                                type="file"
                                className='gallery-manage-popup-file-input'
                                onChange={(e) => setEditingItem({ ...editingItem, image: e.target.files[0] })} 
                            />
                            <i className="fa-solid fa-cloud-arrow-up gallery-manage-popup-upload-icon"></i>
                            <p> Drop files here or click to upload.</p>
                        </label>
                        <div className='manage-gallery-popup-sec-content'>
                            <h5 className='manage-gallery-popup-img-name'>Image Name</h5><br />
                            <input
                                className='manage-gallery-popup-inpu-name'
                                type="text"
                                value={editingItem.title}
                                onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })} 
                            /><br />
                            <button type="submit" className='manage-gallery-popup-sec-button' disabled={loading}>
                                {loading ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const MyDelete = ({ setDeleteModal, deleteHandler, loading }) => {
    return (
        <div className='manage-gallery-delete-modal'>
            <div className='manage-gallery-delete-popup'>
                <i className="fa-sharp fa-regular fa-circle-xmark add-gallery-cross" 
                onClick={() => setDeleteModal(false)}></i>
                <i className="fa-solid fa-triangle-exclamation manage-gallery-delete-popup-triangle-exclamation"></i>
                <h4>Do You Want To Delete This!</h4>
                <button className='gallery-delete-popup-sec-button' onClick={deleteHandler} disabled={loading}>
                    {loading ? 'Deleting...' : 'Delete'}
                </button>
            </div>
        </div>
    );
};

export default ManageGallery;
