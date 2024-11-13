import React, { useState } from 'react';
import "../css/pages/AdminReferralLink.css"
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const AdminReferralLink = () => {

    const [referral , setReferral] = useState('')

    // const {user} = state
    const {admin} = useSelector(state => state.user);
    // console.log(admin)
    // console.log(currentUser.referralLink)

    const handleCopyLink = () => {
        if (admin.referralLink) {
            navigator.clipboard.writeText(admin.referralLink)
                .then(() => {
                    toast.success("Link Copied")
                })
                .catch(err => {
                    toast.error('Failed to copy');
                });
        }
    };
    
   
    return (
        <div className='referal-link-container2'>
            <h4 className='m-3'>Your Referral Links</h4>
            <hr />
            <div className='referal-link-sec'>
                
               
            </div>

            <div className='referal-link-content'>
                <table className='referal-link-table'>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr >
                                <td>1</td>
                                <td className='admin-referral-link'>{admin.referralLink}</td>
                                <td>
                                    <button type="button" className="btn btn-success" onClick={handleCopyLink} >
                                        Copy Link
                                    </button>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>

           
        </div>
    );
};

export default AdminReferralLink;
