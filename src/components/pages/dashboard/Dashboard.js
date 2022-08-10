import React from "react";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="dash_content_area">
            <div className="container-fluid">
                <Outlet />
            </div>
        </div>
    )
}
export default Dashboard;