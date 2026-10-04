import React, { useEffect, useState, useRef} from "react";


function FilesandFolders(props) {

    const [fileandFolders, setFileandFolders] = useState(props.overAlldata || []);
    const [openInputOn, setOpenInputOn] = useState(null);
    const [inputValue,setInputValue] = useState("");

    const useReff = useRef(null);

    useEffect(()=>{
        if(props.openInput){
            let inputplace = props.activeFolder;
            if(!inputplace.length>0){
                setOpenInputOn("global");
                console.log("refff", useReff)
                useReff.current?.focus();
            }
        }
    },[props.openInput]);

    useEffect(()=>{
        setFileandFolders(props.overAlldata);
    },[props.overAlldata])

    const createNew = (e) => {
        setInputValue(e.target.value);
    }

    const submited = () =>{
        if(props.fileOrFolder == "createFile"){
            let obj = {};
            obj["filename"] = inputValue;
            obj["type"] = "file";
            obj["folder"] = null;
            obj["id_no"] = ((props.overAlldata && props.overAlldata[0] && props.overAlldata[0].count)||0) +1;
            props.createNew(obj);
            props.setOpenInput(null);
            setOpenInputOn(null);
        }
    }


    return(
        <>
        <div className="rows">
            {
                openInputOn == "global" ? <input ref={useReff} id="" type="text" onBlur={()=>{
                    props.setOpenInput(false);
                    setOpenInputOn(null);
                }} /* value={} */ onChange={createNew} onKeyDown={(e)=>{
                    e.key === "Enter" ? submited() : null;
                }}/>
                : null
            }
            {
                fileandFolders && fileandFolders.length>0 ? 
                fileandFolders.map((res)=>{
                    if(res.type == "folder"){
                    }else if(res.type == "file" && res.filename) return <div>{res.filename}</div>
                }) : <div>No record Found</div>
            }
        </div>
        </>
    )
}

export default FilesandFolders;