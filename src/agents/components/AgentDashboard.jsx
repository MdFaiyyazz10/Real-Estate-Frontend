import React from 'react';
import { Users, DollarSign, TrendingUp, Award } from 'lucide-react';
import '../style/AgentDashboard.css'

function AgentDashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <div className="nav-item-dash active">Dashboard</div>
        <div className="nav-item-dash">Referral Link</div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Direct Sales</h3>
            <p className="stat-value">0</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Team Sale</h3>
            <p className="stat-value">1</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3>Direct Income</h3>
            <p className="stat-value">Rs. 0.00</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3>Level Income</h3>
            <p className="stat-value">Rs. 2,800.00</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>Royalty Bonus</h3>
            <p className="stat-value">0</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Award size={24} />
          </div>
          <div className="stat-content">
            <h3>Club House Membership Bonus</h3>
            <p className="stat-value">0</p>
          </div>
        </div>

        <div className="stat-card wide">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Team Members</h3>
            <p className="stat-value">7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;