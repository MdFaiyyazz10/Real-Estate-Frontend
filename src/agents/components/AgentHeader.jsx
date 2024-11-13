import React from 'react'
import { Bell, User } from 'lucide-react';
import '../style/AgentHeader.css'

const AgentHeader = () => {
  return (
    <header className="header">
    <div className="header-title">
      <h1>Highland Builders And Developers</h1>
      <span className="kyc-status">Your KYC is pending. Please complete it.</span>
    </div>
    
    <div className="header-actions">
      <button className="notification-btn">
        <Bell size={20} />
        <span className="notification-badge">1</span>
      </button>
      
      <div className="user-profile">
        <div className="avatar">
          <User size={20} />
        </div>
        <div className="user-info">
          <span className="user-name">Highland</span>
          <span className="user-id">HBD47193</span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default AgentHeader
