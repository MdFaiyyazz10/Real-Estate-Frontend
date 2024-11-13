import { Outlet } from 'react-router-dom';
import AgentNav from './AgentNav';
import AgentHeader from './AgentHeader';
import '../style/Agent.css';

const Agent = () => {
  return (
    <div className="agent">
      <AgentNav />
      <div className="main-content">
        <AgentHeader />
        <Outlet />  {/* This will render the nested route components like AgentProfile */}
      </div>
    </div>
  );
};

export default Agent;
