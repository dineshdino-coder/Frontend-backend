import "./App.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Taskmodal from "./Dialog.jsx";
import VscodeComponent from "./myComponents/VscodeComponent.jsx";



export default function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    try {
      // const savedData = localStorage.getItem("userDetails");
      // if (!savedData) {
      //   setUserDetails([]);
      //   return;
      // }

      // const parsedData = JSON.parse(savedData);
      const parsedData = [
        {
          title: "Wakeup",
          description: "must need to wakup early",
          status: "pending",
          priority: "low",
          date: "11/10/1997",
        },
        {
          title: "Bath",
          description: "Must bath early",
          status: "Done",
          priority: "medium",
          date: "12/10/1997",
        },
        {
          title: "GYM",
          description: "must go for GYM",
          status: "in-progress",
          priority: "High",
          date: "3/10/1997",
        },
      ];
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

  const editData = (data) => {
    console.log(data);
  };
  const deleteData = (data) => {
    console.log(data)
  };
  return (
    <>
      <VscodeComponent/>
    </>
    // <div className="Container">
    //   <div>
    //     <table className="table_data">
    //       <thead>
    //         <tr>
    //           <th>S.NO</th>
    //           <th>Task Title</th>
    //           <th>Description</th>
    //           <th>Status</th>
    //           <th>Priority</th>
    //           <th>Due Date</th>
    //           <th>Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {userDetails && userDetails.length > 0 ? (
    //           userDetails.map((respo, index) => {
    //             return (
    //               <tr key={respo.id}>
    //                 <td>{index + 1}</td>
    //                 <td>{respo.title}</td>
    //                 <td>{respo.description}</td>
    //                 <td>{respo.status}</td>
    //                 <td>{respo.priority}</td>
    //                 <td>{respo.date}</td>
    //                 <td>
    //                   <div className="actions">
    //                     <div onClick={() => editData(respo)}> Edit </div>
    //                     <div onClick={() => deleteData(respo)}>Delete </div>
    //                   </div>
    //                 </td>
    //               </tr>
    //             );
    //           })
    //         ) : (
    //           <tr>
    //             <td colSpan={6}>
    //               No data is present in the table. Please add data.
    //             </td>
    //           </tr>
    //         )}
    //       </tbody>
    //     </table>
    //   </div>
    //   <div>
    //     <Button
    //       variant="contained"
    //       onClick={() => {
    //         createNew();
    //       }}
    //       style={{ marginLeft: 12 }}
    //     >
    //       Add data
    //     </Button>
    //   </div>
    //   <Taskmodal open={openModal} onClose={closeModal} />
    // </div>
  );
}
