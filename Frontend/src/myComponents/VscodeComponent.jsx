import React, { useEffect } from "react";
import {useState} from "react";
import Header from "./Header";
import FilesandFolders from "./FilesandFolders";

function VscodeComponent(){
    const [activeFolder, setActiveFolder] = useState([]);
    const [fileOrFolder, setFileOrFolder] = useState(false);
    const [overAlldata, setOverAlldata] = useState([]);
    const [openInput, setOpenInput] = useState(false);

    useEffect(()=>{
        var dataFromLocal = JSON.parse(localStorage.getItem("overAlldata"));
        dataFromLocal ? setOverAlldata(dataFromLocal) : null;
    },[]);

    useEffect(()=>{
        if(fileOrFolder && activeFolder.length == 0){
            setOpenInput(true);
        }
    },[fileOrFolder]);

    const createNew = (data) => {
        if(activeFolder.length>0){

        }else{
            var dataFromLocal = localStorage.getItem("overAlldata");
            dataFromLocal = dataFromLocal ? dataFromLocal = JSON.parse(dataFromLocal) : null;
            if(dataFromLocal !== null){
               let local = dataFromLocal;
               local.push(data);
               local[0].count = local[0].count+1;
               localStorage.setItem("overAlldata",JSON.stringify(local));
                setOverAlldata(local);
                setFileOrFolder(false);
            }else{
                let arr = [];
                arr.push({
                    count:1,
                },data)
                localStorage.setItem("overAlldata",JSON.stringify(arr));
                setOverAlldata(arr);
                setFileOrFolder(false);
            }
        }
    }


    return(
        <div className="sideBarContainer">
           <Header fileOrFolder={fileOrFolder} setFileOrFolder={setFileOrFolder}/>
           <FilesandFolders createNew={createNew} fileOrFolder={fileOrFolder} setOpenInput={setOpenInput} openInput={openInput} overAlldata={overAlldata} activeFolder = {activeFolder} setActiveFolder = {setActiveFolder}/>
        </div>
    )
}
export default VscodeComponent