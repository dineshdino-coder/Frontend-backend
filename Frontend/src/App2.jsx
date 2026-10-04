import { Button } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
function App2() {
  const [overallTask, setOverallTask] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("overallData");
    if (data) {
      data = JSON.parse(data);
      setOverallTask(data);
    }
  }, []);

  const searchChanged = (e) => {
    console.log(e);
  };
  const closeModal = (data) => {
    setOpenModal(false);
  };
  const formSubmit = (fmdata) => {
    let from = "new";
    console.log(fmdata);
    if (fmdata.title == "" || !fmdata.title) {
      alert("Please enter title");
    } else {
      let localData = localStorage.getItem("overallData");
      if (localData) {
        localData = JSON.parse(localData);
      }
      if (from == "new") {
        if (!localData) {
          let arr = [];
          arr.push(fmdata);
          localStorage.setItem("overallData", JSON.stringify(arr));
        } else {
          localData.push(fmdata);
          localStorage.setItem("overallData", JSON.stringify(localData));
        }
        setOverallTask(localData)
      }
    }
  };
  return (
    <div className="Container">
      <table>
        <thead>
          <tr>
            <th>SNO</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {overallTask && overallTask.length > 0 ? (
            overallTask.map((respo, index) => {
              return (
                <tr>
                    <td>{index+1}</td>
                  <td>{respo.title}</td>
                  <td>{respo.description}</td>
                  <td>{respo.status}</td>
                  <td>{respo.priority}</td>
                  <td>{respo.date}</td>
                  {/* <td>{respo.title}</td> */}
                </tr>
              );
            })
          ) : searchActive && searchActive.length > 0 ? (
            searchActive.map((respo) => {})
          ) : (
            <tr>
              <td>No data available please add </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <div>
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
            variant="contained"
          >
            {" "}
            Add here
          </Button>
          <input type="text" onChange={searchChanged} id="search" />
        </div>
      </div>
      <Modal
        open={openModal}
        close={closeModal}
        data={{ new: "true" }}
        submit={formSubmit}
      />
    </div>
  );
}

export default App2;
