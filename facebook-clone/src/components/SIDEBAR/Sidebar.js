import React from "react";
import SidebarRow from "../SIDEBAR ROW/SidebarRow";
import "./Sidebar.css";
function Sidebar() {
  return <div className="sidebar">
      <SidebarRow title = "Pages"/>
      <SidebarRow title = "Friends"/>
      <SidebarRow title = "Messanger"/>
      <SidebarRow title = "Videos"/>
      
  </div>;
}

export default Sidebar;
