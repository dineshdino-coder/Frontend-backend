import "./App.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Taskmodal from "./Dialog";


export default function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem("userDetails");
      if (!savedData) {
        setUserDetails([]);
        return;
      }

      const parsedData = JSON.parse(savedData);
      setUserDetails(Array.isArray(parsedData) ? parsedData : []);
    } catch (error) {
      console.error("Failed to parse user details:", error);
      setUserDetails([]);
    }
  }, []);

  const createNew = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Task Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {userDetails && userDetails.length > 0 ? (
            userDetails.map((respo, index) => {
              return (
                <tr key={respo.id}>
                  <td>{index + 1}</td>
                  <td>{respo.title}</td>
                  <td>{respo.description}</td>
                  <td>{respo.status}</td>
                  <td>{respo.prio}</td>
                  <td>{respo.date}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6}>
                No data is present in the table. Please add data.
                <Button
                  variant="contained"
                  onClick={() => {
                    createNew();
                  }}
                  style={{ marginLeft: 12 }}
                >
                  Add data
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Taskmodal open={openModal} onClose={closeModal} />
    </>
  );
}






























// function App() {
//   const tiles = [
//     { id: 1, className: "tile green large" },
//     { id: 2, className: "tile blue wide" },
//     { id: 3, className: "tile orange large" },
//     { id: 4, className: "tile yellow tall" },
//     { id: 5, className: "tile brown" },
//     { id: 6, className: "tile indigo tall" },
//     { id: 7, className: "tile red" },
//     { id: 8, className: "tile pink wide" },
//     { id: 9, className: "tile purple" },
//     { id: 10, className: "tile blue wide-bottom" },
//   ];

//   return (
//     <div className="container">
//       {tiles.map((tile) => (
//         <div key={tile.id} className={tile.className}>
//           {tile.id}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// // import React from "react";
// import './App.css';
// import './App.css';
// import axios from "axios";
// import { useState, useEffect } from "react";
// function App() {

//   function thisFunction() {
//     console.log("thisFunction called",this);

//   }
//   thisFunction();

// useEffect(()=>{
//   axios.get("http://localhost:5000/testing")
//     .then((response) => {
//       // alert("adf")
//       console.log(response.data.message);
//     });
// },[])
// return (
//   <>
//     <div className="container">
//       <div className="tile green">1</div>
//       <div className="tile blue-top">2</div>
//       <div className="tile orange">3</div>
//       <div className="tile yellow">4</div>
//       <div className="tile brown">5</div>
//       <div className="tile red">6</div>
//       <div className="tile indigo">7</div>
//       <div className="tile pink">8</div>
//       <div className="tile purple">9</div>
//       <div className="tile blue-bottom">10</div>
//     </div>

{
  /* <div className="mainContainer">
        <div className="topContainer">
          <div className="topLeftContainer">
            <div className="topUpperContainer"></div>
            <div className="topBottomContainer"></div>
          </div>
          <div className="topRightContainer">
            <div className="topUpperRightContainer"></div>
            <div className="topBottomRightContainer">
              <div className="topBottom_left_RightContainer">
                <div className="topBottom_left_top_Container"></div>
                <div className="topBottom_left_bottomContainer"></div>
              </div>
              <div className="topBottom_rightContainer">
                <div className="topBottom_right_top_Container"></div>
                <div className="topBottom_right_bottomContainer"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          <div className="bottom_top_Container"></div>
          <div className="bottom_bottom_Container"></div>
        </div>
      </div> */
}
//     </>
//   );
// }

// export default App;
