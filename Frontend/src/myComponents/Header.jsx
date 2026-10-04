import React from "react";
import { useEffect } from "react";

function Header(props) {

  const creates = (e) => {
    if (e.target.id == "createFile") {
      props.setFileOrFolder("createFile");
    } else {
      props.setFileOrFolder("createFolder");
    }
  };

  const createFile = () => {
  };

  return (
    <div className="mainSideBar">
      <div>VS side bar</div>
      <div onClick={creates} className="sidebarActions">
        <div id="createFile">+ File</div>
        <div id="createFolder">+ Folder</div>
      </div>
    </div>
  );
}
export default Header;
