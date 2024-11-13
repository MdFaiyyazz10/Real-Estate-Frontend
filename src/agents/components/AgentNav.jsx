import React from "react";
import {
  LayoutDashboard,
  Link,
  Users,
  Briefcase,
  UserPlus,
  PieChart,
  TreePine,
  DollarSign,
  History,
  Mail,
  User,
  Grid2x2,
} from "lucide-react";
import "../style/AgentNav.css";
// import img from '../../../public/img/highland'

const AgentNav = () => {
  return (
    <aside className="sidebar">
    
      <div class="d-flex logo-ad">
        <div className="logo">
          <img src="/img/highlandlogo1.png" alt="Highland Builders" />
        </div>
      <div>
        <Grid2x2  />
      </div>
      
      </div>

      <div className="user-info">
        <h2>Agent</h2>
      </div>

      <nav className="nav-menu-agent">
        <div className="menu-section">
          <a href="#" className="nav-item-agent active">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item-agent">
            <Link size={20} />
            <span>Referral Link</span>
          </a>
          <a href="/agent/dashboard/profile" className="nav-item-agent">
            <Users size={20} />
            <span>Profile Status</span>
          </a>
          <a href="#" className="nav-item-agent">
            <Briefcase size={20} />
            <span>My Business</span>
          </a>
          <a href="#" className="nav-item-agent">
            <UserPlus size={20} />
            <span>My Team</span>
          </a>
          <a href="#" className="nav-item-agent">
            <PieChart size={20} />
            <span>Month Team Business</span>
          </a>
          <a href="#" className="nav-item-agent">
            <TreePine size={20} />
            <span>Agent Tree</span>
          </a>
          <a href="#" className="nav-item-agent">
            <DollarSign size={20} />
            <span>Incomes</span>
          </a>
          <a href="#" className="nav-item-agent">
            <History size={20} />
            <span>Withdrawal History</span>
          </a>
          <a href="/agent/dashboard/letter" className="nav-item-agent">
            <Mail size={20} />
            <span>Welcome Letter</span>
          </a>
        </div>

        <div className="menu-section business-partner">
          <h3>BUSINESS PARTNER</h3>
          <a href="#" className="nav-item-agent">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item-agent">
            <User size={20} />
            <span>Profile / KYCs</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default AgentNav;
