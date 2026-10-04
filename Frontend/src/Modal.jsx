import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Dialog,
} from "@mui/material";
import { useState, useEffect } from "react";

export function Modal({ open, close, data, submit }) {
  const [newForm, setNewFrom] = useState(false);
  const [editForm, setEditFrom] = useState(false);
  const [deleteForm, setDeleteFrom] = useState(false);
  const [formData, setFormData] = useState(null);
  const [priorityVal, setPrioVal] = useState(null);

  useEffect(() => {
    console.log("datatochild", data);
    if (data.new) {
      let obj = {};
      obj.title = "";
      obj.description = "";
      obj.status = "Pending";
      obj.priority = "High Priority";
      obj.date = "";
      setFormData(obj);
      setNewFrom(true);
    }
  }, []);

  const inputChange = (data) => {
    console.log("onchange", data);
    if (data.target.id == "title") {
      let dataObj = formData;
      dataObj["title"] = data.target.value;
      setFormData(dataObj);
    } else if (data.target.id == "description") {
      let dataObj = formData;
      dataObj["description"] = data.target.value;
      setFormData(dataObj);
    } else if (data.target.id == "priority") {
      let dataObj = formData;
      dataObj["priority"] = data.target.value;
      setFormData(dataObj);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData && formData.title) {
      submit(formData);
    } else alert("please enter Title");
  };
  console.log("finalllll", formData);
  return (
    <Dialog open={open} onClose={close}>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {formData && Object.keys(formData).length > 0 ? (
            <>
              {formData &&
                Object.keys(formData).map((respo) => {
                  if (respo == "title" || respo == "description") {
                    return (
                      <div>
                        <label>{respo}</label>
                        <input
                          id={respo}
                          type="text"
                          value={formData[respo].value}
                          onChange={(e) => inputChange(e)}
                        />
                      </div>
                    );
                  } else if (respo == "status") {
                    return (
                      <select>
                        <option value="low">Low</option>
                        <option value="mid">Mid</option>
                        <option value="high">High</option>
                      </select>
                    );
                  } else if (respo == "priority") {
                    return (
                      <select id = {respo} value={priorityVal} onChange={(e)=>{
                        let dataObj = formData;
                        dataObj["priority"] = data.target.value;
                        setFormData(dataObj);
                        setPrioVal(dataObj["priority"])
                      }}>
                        <option value="pending"> Pending</option>
                        <option value="progress"> In-Progress</option>
                        <option value="completed"> Completed</option>
                      </select>
                    );
                  }
                })}
            </>
          ) : (
            <></>
          )}
        </DialogContent>
        <DialogActions>
          <Button>Close</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
