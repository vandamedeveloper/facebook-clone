import React from "react";
import "./SidebarRow";
function SidebarRow({ src, icon, title }) {
  return (
    <div className="sidebarRow">
      {icon}
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarRow;
 