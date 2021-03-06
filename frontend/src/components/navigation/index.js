import React, { useState } from "react";
//import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import "./navigation.css";
import { IconContext } from "react-icons/lib";
const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="Navbar">
          <Link to="#" className="menu-bar">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="navbar-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navigation;
