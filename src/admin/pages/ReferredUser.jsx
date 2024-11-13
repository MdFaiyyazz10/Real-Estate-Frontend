import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/pages/ReferredUser.css';

const ReferredUser = () => {
    const [referredUsers, setReferredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchReferredUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/admin/referred-users', { withCredentials: true });
            console.log(response)
            // setReferredUsers(response.data.referredUsers);
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReferredUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // Filter entries based on search query
    const filteredEntries = referredUsers.filter(user =>
        user.userId && user.userId.name && user.userId.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate total pages
    const totalEntries = filteredEntries.length;
    const totalPages = Math.ceil(totalEntries / entriesPerPage);

    // Get current entries
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

    // Handle items per page change
    const handleEntriesPerPageChange = (event) => {
        setEntriesPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to the first page on change
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to the first page on search
    };

    return (
        <div className='myteamdeatils-container2'>
            <h4 className='m-3'>My Team Details</h4>
            <hr />
            <div className='myteamdeatils-sec'>
                <div className='heading-1 col-2'>
                    <label htmlFor="show">Show:</label>
                    <select onChange={handleEntriesPerPageChange} value={entriesPerPage}>
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
                    <input
                        className='myteamdetails-seach'
                        type="search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className='myteamdetails-content'>
                <table className='myteamdeatils-table'>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Agent ID</th>
                            <th>Full Name</th>
                            <th>Level</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Joined Date</th>
                        </tr>
                    </thead>
                    <tbody>
    {currentEntries.map((entry, index) => (
        entry && entry.userId ? (
            <tr key={entry._id || index}>
                <td>{indexOfFirstEntry + index + 1}</td>
                <td>{entry.userId.sponsorId || 'N/A'}</td>
                <td>{entry.userId.name || 'N/A'}</td>
                <td>{entry.userId.level || 'N/A'}</td>
                <td>{entry.userId.phoneNumber || 'N/A'}</td>
                <td>{entry.userId.email || 'N/A'}</td>
                <td>{entry.registeredAt ? new Date(entry.registeredAt).toLocaleDateString() : 'N/A'}</td>
            </tr>
        ) : null
    ))}
</tbody>

                </table>
            </div>

            <div className='myteamdeatils-pagination'>
                <p>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries</p>
                <nav aria-label="Page navigation example myteamdeatils-page">
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
    );
};

export default ReferredUser;
