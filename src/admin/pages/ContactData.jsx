import React, { useEffect, useState } from 'react';
import "../css/pages/ContactData.css";
import Adminnav from '../component/AdminNav';
import axios from 'axios';
import { backend } from '../../App';

const ContactData = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [contactForm, setContactForm] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${backend}/api/v1/user/get-message`);
            setContactForm(res.data.allMessage); // Adjust this line if the data structure is different
            // console.log(res.data.allMessage)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Run once when the component mounts

    // Calculate total pages
    const totalEntries = contactForm.length;
    const totalPages = Math.ceil(totalEntries / entriesPerPage);

    // Get current entries
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = contactForm.slice(indexOfFirstEntry, indexOfLastEntry);

    // Handle items per page change
    const handleEntriesPerPageChange = (event) => {
        setEntriesPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to the first page on change
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Adminnav />
            <div className='contact-manage-container2'>
                <h4 className='m-3'>Contact Data</h4>
                <hr />
                <div className='contact-manage-sec'>
                    <div className='heading-1 col-2'>
                        <label htmlFor="show">Show:</label>
                        <select onChange={handleEntriesPerPageChange}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <div className='heading-2 col-6'>
                        <span>entries</span>
                    </div>
                    <div className='heading-3 col-4'>
                        <label htmlFor="search">Search:</label>
                        <input className='contactManage-seach' type="search" />
                    </div>
                </div>

                <div className='contact-manage-content'>
                    <table className='contact-manage-table'>
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>Email</th>
                                {/* <th>City</th> */}
                                <th>Phone No</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.map((entry, index) => (
                                <tr key={entry._id}>
                                    <td>{indexOfFirstEntry + index + 1}</td>
                                    <td>{entry.name}</td>
                                    <td>{entry.email}</td>
                                    {/* <td>{entry.city}</td> */}
                                    <td>{entry.phoneNumber}</td>
                                    <td>{entry.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='contact-manage-pagination'>
                    <p>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries</p>
                    <nav aria-label="Page navigation example">
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
        </>
    );
};

export default ContactData;
