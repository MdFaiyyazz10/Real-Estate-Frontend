import React, { useState, useEffect } from "react";
import AgentNav from "./AgentNav";
import "../style/AgentProfile.css";
import { Country, State, City } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { backend } from "../.././App";
import {
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
} from "../../redux/user/userSlicer";

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

      <section
        id="agent-user_kyc"
        className={isPopupVisible ? "agent-user_kyc-blur" : ""}
      >
        <div>
          <div className="agent-user_kyc_img">
            <p>My Profile</p>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" /> */}
            <img src={agent.profileImage} alt="Profile" />
          </div>

          <div className="agent-user_kyc_detail">
            <h3>Edit Profile</h3>
            <p>
              "Your KYC is pending. Please complete it by clicking the{" "}
              <strong>'Update Profile'</strong> button to enjoy uninterrupted
              services."
            </p>
            <form id="agent-user_kyc_detail_inputs">
              <div>
                <div>
                  <label>Name :</label>
                  <p>{agent.name ? agent.name : "Not Available"}</p>
                </div>
                <div>
                  <label>Email :</label>
                  <p>{agent.email ? agent.email : "Not Available"}</p>
                </div>
                <div>
                  <label>Phone No :</label>
                  <p>
                    {agent.phoneNumber ? agent.phoneNumber : "Not Available"}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <label>Joining Date :</label>
                  <p>{joiningDate ? joiningDate : "Not Available"}</p>
                </div>
                <div>
                  <label>City :</label>
                  <p>{agent.city ? agent.city : "Not Available"}</p>
                </div>
                <div>
                  <label>State :</label>
                  <p>{agent.state ? agent.state : "Not Available"}</p>
                </div>
              </div>
              <div>
                <div>
                  <label>DOB :</label>
                  <p>
                    {agent.dob && new Date(agent.dob).getTime()
                      ? new Date(agent.dob).toLocaleDateString("en-GB")
                      : "Not Available"}
                  </p>
                </div>
                <div>
                  <label>Gender :</label>
                  <p>{agent.gender ? agent.gender : "Not Available"}</p>
                </div>
              </div>
              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <button
                  className="agent-kyc_update_btn"
                  onClick={handleUpdateProfileClick}
                >
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

      {isPopupVisible && (
        <AgentUpdateProfilePopup onClose={() => setIsPopupVisible(false)} />
      )}
    </>
  );
}



const AgentUpdateProfilePopup = ({ onClose }) => {
    const { agent } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: agent.name || '',
        dob: agent.dob || '',
        gender: agent.gender || '',
        email: agent.email || '',
        phoneNumber: agent.phoneNumber || '',
        country: agent.country || '',
        state: agent.state || '',
        city: agent.city || '',
        
        bankName: agent.bankName || '',
        accountHolderName: agent.accountHolderName || '',
        accountNumber: agent.accountNumber || '',
        ifsc: agent.ifsc || '',
        branch: agent.branch || '',
        
        profileImage: null,
        panPhoto: null,
        aadhaarPhoto: null,
        cancelledCheque: null,
    });

    const [isUpdating, setIsUpdating] = useState(false);

    // Handle input changes for text fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle file changes
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        if (file) {
            // Validate file size and type
            if (file.size > 2 * 1024 * 1024) {
                toast.error("File size should be less than 2MB");
                return;
            }
            if (!file.type.startsWith("image/")) {
                toast.error("Only image files are allowed");
                return;
            }

            setFormData((prevState) => ({
                ...prevState,
                [name]: file,
            }));
        }
    };

    useEffect(() => {
        if (agent.dob) {
            const formattedDob = new Date(agent.dob).toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD'
            setFormData((prevState) => ({
                ...prevState,
                dob: formattedDob,
            }));
        }
    }, [agent.dob]);


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        dispatch(updateUserStart());

        const formToSubmit = new FormData();
        
        // Append form data (text fields) to the FormData object
        for (const [key, value] of Object.entries(formData)) {
            if (value) formToSubmit.append(key, value);
        }

        try {
            const response = await axios.put(
                `${backend}/api/v1/agent/update/${agent._id}`,
                formToSubmit,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                dispatch(updateUserSuccess(response.data.agent));
                toast.success("Profile updated successfully!");
                onClose();
            }
        } catch (error) {
            dispatch(updateUserFailed(error));
            // console.error(error);
            toast.error("Failed to update profile. Please try again.");
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <section id="agent-user_kyc_popup">
            <form className="agent-user_kyc_popup-content" onSubmit={handleSubmit}>
                <button
                    type="button"
                    className="agent-user_kyc_popup-close_btn"
                    onClick={onClose}
                >
                    <i className="fa-regular fa-circle-xmark"></i>
                </button>
                <h3>Edit Profile</h3>
                <hr />
                <p style={{ color: "red" }}>"Star [*] indicates required fields."</p>
                <div id="agent-user_kyc_popup_detail_inputs">
                    <div>
                        <label>Profile Image :</label>
                        <input
                            type="file"
                            name="profileImage"
                            onChange={handleFileChange}
                            disabled={isUpdating}
                        />
                    </div>
                    <div>
                        <label>Name :</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isUpdating}
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
                            disabled={isUpdating}
                        />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            disabled={isUpdating}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Email :</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isUpdating}
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
                            disabled={isUpdating}
                            onInput={(e) =>
                                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                            }
                        />
                    </div>
                </div>

                <hr />
                <p style={{ color: "red" }}>Bank Details :</p>
                <div id="agent-user_kyc_popup_detail_inputs">
                    <div>
                        <label>Bank Name :</label>
                        <input
                            type="text"
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleChange}
                            required
                            disabled={isUpdating}
                        />
                    </div>
                    <div>
                        <label>Account Holder Name :</label>
                        <input
                            type="text"
                            name="accountHolderName"
                            value={formData.accountHolderName}
                            onChange={handleChange}
                            required
                            disabled={isUpdating}
                        />
                    </div>
                    <div>
                        <label>Account No :</label>
                        <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            required
                            disabled={isUpdating}
                        />
                    </div>
                    <div>
                        <label>IFSC :</label>
                        <input
                            type="text"
                            name="ifsc"
                            value={formData.ifsc}
                            onChange={handleChange}
                            required
                            disabled={isUpdating}
                        />
                    </div>
                    <div>
                        <label>Branch :</label>
                        <input
                            type="text"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            required
                            disabled={isUpdating}
                        />
                    </div>
                </div>

                <hr />
                <div id="agent-user_kyc_popup_detail_inputs">
                    <div>
                        <label>Upload Pan Photo :</label>
                        <input
                            type="file"
                            name="panPhoto"
                            onChange={handleFileChange}
                            disabled={isUpdating}
                        />
                    </div>
                    <div>
                        <label>Upload Aadhaar Photo :</label>
                        <input
                            type="file"
                            name="aadhaarPhoto"
                            onChange={handleFileChange}
                            disabled={isUpdating}
                        />
                    </div>
                    <div>
                        <label>Cancelled Cheque :</label>
                        <input
                            type="file"
                            name="cancelledCheque"
                            onChange={handleFileChange}
                            disabled={isUpdating}
                        />
                    </div>
                    <button
                        type="submit"
                        className="agent-kyc_update_btn"
                        disabled={isUpdating}
                    >
                        {isUpdating ? "Updating..." : "Click to Save changes"}
                    </button>
                </div>
            </form>
        </section>
    );
};


  
  

export default AgentProfile;
