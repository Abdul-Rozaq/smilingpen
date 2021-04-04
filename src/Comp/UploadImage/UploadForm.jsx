import { AddCircleOutline } from '@material-ui/icons';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import ProgressBar from './ProgressBar';
import "./UploadForm.css";

const UploadForm = ({ setImage }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const { name } = useParams();
    // console.log(name);
  
    const types = ['image/png', 'image/jpeg'];
  
    const handleChange = (e) => {
      let selected = e.target.files[0];
  
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    };

    return (
        <div className="uploadForm"> 
            <form>
                <label>
                    <input type="file" onChange={handleChange} />
                    <span><AddCircleOutline /></span>
                </label>
                <div className="output">
                    { error && <div className="error">{ error }</div>}
                    { file && <div>{ file.name }</div> }
                    { file && <ProgressBar setImage={setImage} file={file} setFile={setFile} urlString={name} /> } 
                </div>
            </form>
        </div>
    )
}

export default UploadForm
