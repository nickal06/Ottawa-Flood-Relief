import { SideMenuBar } from "../components/side-menu-bar";
import "./user-dashboard.css";

export function UserDashboard({ userName }) {
    return (
        <div className="dashboard">

            <SideMenuBar />

            <div className="dashboard-content">
                <h2>Welcome back, <span className="user-name">{userName || "no username"}</span>! </h2>
            </div>

        </div>
    );
}