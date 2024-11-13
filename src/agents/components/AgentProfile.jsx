import React, { useState, useEffect } from 'react';
import AgentNav from './AgentNav';
import '../style/AgentProfile.css';
import { Country, State, City } from 'country-state-city';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import {backend} from '../.././App'

function AgentProfile() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleUpdateProfileClick = (e) => {
        e.preventDefault();
        setIsPopupVisible(true);
    };

    const { agent } = useSelector((state) => state.user);
    const joiningDate = new Date(agent.createdAt).toLocaleDateString();

    return (
        <>
            <AgentNav />

            <section id="agent-user_kyc" className={isPopupVisible ? 'agent-user_kyc-blur' : ''}>
                <div>
                    <div className="agent-user_kyc_img">
                        <p>My Profile</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
                    </div>

                    <div className="agent-user_kyc_detail">
                        <h3>Edit Profile</h3>
                        <p>
                            "Your KYC is pending. Please complete it by clicking the <strong>'Update Profile'</strong> button to enjoy uninterrupted services."
                        </p>
                        <form id="agent-user_kyc_detail_inputs">
                            <div>
                                <div>
                                    <label>Name :</label>
                                    <p>{agent.name}</p>
                                </div>
                                <div>
                                    <label>Email :</label>
                                    <p>{agent.email}</p>
                                </div>
                                <div>
                                    <label>Phone No :</label>
                                    <p>{agent.phoneNumber}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Joining Date :</label>
                                    <p>{joiningDate}</p>
                                </div>
                                <div>
                                    <label>City :</label>
                                    <p>{agent.city}</p>
                                </div>
                                <div>
                                    <label>State :</label>
                                    <p>{agent.state}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>DOB :</label>
                                    <p>{agent.dob}</p>
                                </div>
                                <div>
                                    <label>Gender :</label>
                                    <p>{agent.gender}</p>
                                </div>
                                <div>
                                    <label>Role :</label>
                                    <p>{agent.role}</p>
                                </div>
                            </div>
                            <div className="mt-3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button className="agent-kyc_update_btn" onClick={handleUpdateProfileClick}>
                                    Update Profile
                                </button>
                                <button className="agent-kyc_reset_btn" type="button">
                                    Click to reset changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {isPopupVisible && <AgentUpdateProfilePopup onClose={() => setIsPopupVisible(false)} />}
        </>
    );
}

const AgentUpdateProfilePopup = ({ onClose }) => {
    const { agent } = useSelector((state) => state.user);
    const [selectedCountry, setSelectedCountry] = useState(agent.country || '');
    const [selectedState, setSelectedState] = useState(agent.state || '');
    const [selectedCity, setSelectedCity] = useState(agent.city || '');
    const [isUpdating, setIsUpdating] = useState(false);

    const [formData, setFormData] = useState({
        name: agent.name || '',
        dob: agent.dob || '',
        gender: "",
        email: agent.email || '',
        phoneNumber: agent.phoneNumber || '',
        profileImage: null,
        panPhoto: null,
        aadhaarPhoto: null,
        cancelledCheque: null,
        bankDetails: agent.bankDetails || {},
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: files[0],
        }));
    };

    const handleCountryChange = (e) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
        setSelectedState('');
        setSelectedCity('');
    };

    const handleStateChange = (e) => {
        const stateCode = e.target.value;
        setSelectedState(stateCode);
        setSelectedCity('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        const data = new FormData();
        data.append('agentId', agent._id);
        data.append('name', formData.name);
        data.append('dob', formData.dob);
        data.append('email', formData.email);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('country', selectedCountry);
        data.append('state', selectedState);
        data.append('city', selectedCity);

        if (formData.profileImage) data.append('profileImage', formData.profileImage);
        if (formData.panPhoto) data.append('panPhoto', formData.panPhoto);
        if (formData.aadhaarPhoto) data.append('aadhaarPhoto', formData.aadhaarPhoto);
        if (formData.cancelledCheque) data.append('cancelledCheque', formData.cancelledCheque);
        console.log(agent._id)

        try {
            const response = await axios.put(`${backend}/api/v1/agent/update/${agent._id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.success) {
                toast.success('Profile updated successfully!');
                onClose();
            }
        } catch (error) {
            toast.error('Failed to update profile. Please try again.');
            console.error(error);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <section id="agent-user_kyc_popup">
            <form className="agent-user_kyc_popup-content" onSubmit={handleSubmit}>
                <button type="button" className="agent-user_kyc_popup-close_btn" onClick={onClose}>
                    <i className="fa-regular fa-circle-xmark"></i>
                </button>
                <h3>Edit Profile</h3>
                <hr />
                <p style={{ color: 'red' }}>"Star [*] indicates required fields."</p>
                <div id="agent-user_kyc_popup_detail_inputs">
                    <div>
                        <div>
                            <label>Profile Image :</label>
                            <input type="file" name="profileImage" onChange={handleFileChange} />
                        </div>
                        <div>
                            <label>Name :</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>DOB :</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
    <label>Gender:</label>
    <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
    >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
</div>
                    </div>

                    <div>
                        <div>
                            <label>Email :</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Phone No :</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                maxLength={10}
                                pattern="[0-9]*"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Country :</label>
                            <select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                required
                            >
                                <option value="">Select Country</option>
                                {Country.getAllCountries().map((i) => (
                                    <option value={i.isoCode} key={i.isoCode}>
                                        {i.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>State :</label>
                            <select
                                value={selectedState}
                                onChange={handleStateChange}
                                required
                                disabled={!selectedCountry}
                            >
                                <option value="">Select State</option>
                                {State.getStatesOfCountry(selectedCountry).map((i) => (
                                    <option value={i.isoCode} key={i.isoCode}>
                                        {i.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>City :</label>
                            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} required>
                                <option value="">Select City</option>
                                {City.getCitiesOfState(selectedCountry, selectedState).map((city) => (
                                    <option value={city.name} key={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <hr />
                <p style={{ color: 'red' }}>Bank Details :</p>
                <div id="agent-user_kyc_popup_detail_inputs">
                    <div>
                        <div>
                            <label>Bank Name :</label>
                            <input
                                type="text"
                                name="bankName"
                                value={formData.bankDetails.bankName || ''}
                                onChange={(e) => setFormData({ ...formData, bankDetails: { ...formData.bankDetails, bankName: e.target.value } })}
                                required
                            />
                        </div>
                        <div>
                            <label>Account Holder Name :</label>
                            <input
                                type="text"
                                name="accountHolderName"
                                value={formData.bankDetails.accountHolderName || ''}
                                onChange={(e) => setFormData({ ...formData, bankDetails: { ...formData.bankDetails, accountHolderName: e.target.value } })}
                                required
                            />
                        </div>
                        <div>
                            <label>Account No :</label>
                            <input
                                type="text"
                                name="accountNumber"
                                value={formData.bankDetails.accountNumber || ''}
                                onChange={(e) => setFormData({ ...formData, bankDetails: { ...formData.bankDetails, accountNumber: e.target.value } })}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>IFSC :</label>
                            <input
                                type="text"
                                name="ifsc"
                                value={formData.bankDetails.ifsc || ''}
                                onChange={(e) => setFormData({ ...formData, bankDetails: { ...formData.bankDetails, ifsc: e.target.value } })}
                                required
                            />
                        </div>
                        <div>
                            <label>Branch :</label>
                            <input
                                type="text"
                                name="branch"
                                value={formData.bankDetails.branch || ''}
                                onChange={(e) => setFormData({ ...formData, bankDetails: { ...formData.bankDetails, branch: e.target.value } })}
                                required
                            />
                        </div>
                    </div>
                </div>

                <hr />
                <div id="agent-user_kyc_popup_detail_inputs">
                    <div>
                        <div>
                            <label>Upload Pan Photo :</label>
                            <input type="file" name="panPhoto" onChange={handleFileChange} />
                        </div>
                        <div>
                            <label>Upload Aadhaar Photo :</label>
                            <input type="file" name="aadhaarPhoto" onChange={handleFileChange} />
                        </div>
                        <div>
                            <label>Cancelled Cheque :</label>
                            <input type="file" name="cancelledCheque" onChange={handleFileChange} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <button type="submit" className="agent-kyc_update_btn" disabled={isUpdating}>
                    {isUpdating ? 'Updating...' : 'Click to Save changes'}
                </button>
            </form>
        </section>
    );
};

export default AgentProfile;
