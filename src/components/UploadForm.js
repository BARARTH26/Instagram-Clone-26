import React,{useState,useEffect} from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ["image/jpeg","image/png"];
    
    const handleChange = (event) =>{
        let selected = event.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError("")
        }else{
            setFile("null");
            setError("Please selected image file(png and jpeg)")
        }
    }
    return(
        <div>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </div>
    )
}

export default UploadForm;