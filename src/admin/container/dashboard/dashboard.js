import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboards">
      <div className="Dashboard_Container">
        <div className="Dashboard_container">
          <div className="Dashboard_sidebar">
            <Sidebar />
          </div>
          <div className="Dashboard_tables"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
