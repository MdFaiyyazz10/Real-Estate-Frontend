import React, { useState, useRef, useEffect } from 'react';
import "../css/pages/ManageGallery.css";
import Adminnav from '../component/AdminNav';

const ManageGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };


    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);


    return (
        <>
            <Adminnav />

            <div className='container2'>
                <h4 className='m-3'>Manage Gallery</h4>
                <hr />
                <div className='manage-gallery-sec'>
                    <div className='col-2'>
                        <label className='ps-1'>Show :-</label>

                        <div className="dropdown" ref={dropdownRef}>
                            <button className="dropbtn" onClick={toggleDropdown}>
                                <i class="fa-solid fa-angle-down"></i>
                            </button>
                            {isOpen && (
                                <div className="dropdown-content">
                                    <a href="#">10</a>
                                    <a href="#">20</a>
                                    <a href="#">50</a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-6'>
                        <span>entries</span>
                    </div>
                    <div className='col-4'>
                        <label htmlFor="search">Search :</label>
                        <input type="search" />
                    </div>

                </div>

                <div className='manage-gallery-content'>
                    <table className='galler-manage-table'>
                        <tr>
                            <th>Sr. No</th>
                            <th> Name</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                        <td>1 </td>
                        <td>xyz</td>
                        <td>
                            <img style={{ height: "100%" }} src="https://demo.vflyorions.in/builder/assets/img/p3.png" alt="" />
                        </td>
                        <td>
                            <button type="button" class="btn btn-success m-3 ">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </table>
                </div>

            </div>

        </>
    )
}

export default ManageGallery
