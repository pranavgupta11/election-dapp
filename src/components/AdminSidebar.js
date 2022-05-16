import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./SideBar.css";

export default function AdminSidebar() {
  const { currentUser, logOut } = useAuth();
  const [manager, setManager] = useState("The Manager");
  const navigate = useNavigate();

  const logout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="layout has-sidebar fixed-sidebar fixed-header">
      <aside id="sidebar" className="sidebar break-point-lg has-bg-image">
        <div className="image-wrapper">
          <img
            src="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
            alt="sidebar background"
          />
        </div>
        <div className="sidebar-layout">
          <div className="sidebar-header">
            <span
              style={{
                textTransform: "uppercase",
                fontSize: "15px",
                letterSpacing: "3px",
                fontWeight: "bold",
              }}
            >
              Welcome, Admin
            </span>
          </div>
          <div className="sidebar-content">
            <nav className="menu open-current-submenu">
              <ul>
                <Link to="/">
                  <li className="menu-item">Registration</li>
                </Link>
                <Link to="/voting">
                  <li className="menu-item">Voting</li>
                </Link>
                <Link to="/results">
                  <li className="menu-item">Results</li>
                </Link>
                <Link to="/">
                  <li className="menu-item" onClick={logout}>
                    Logout
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="sidebar-footer">
            <br />
            <span>Managed By: {manager}</span>
          </div>
        </div>
      </aside>
      <div id="overlay" className="overlay"></div>
    </div>
  );
}
