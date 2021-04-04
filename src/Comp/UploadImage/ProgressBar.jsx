import React, { useEffect } from 'react';
import useStorage from './useStorage'; 

const ProgressBar = ({ file, setFile, urlString, setImage }) => {
    const { progress, url } = useStorage(file, urlString, setImage);

    useEffect(() => {
      if (url) {
        setFile(null);
      }
    }, [url, setFile]);

    return (
        <div className="progress-bar" style={{ width: progress + "%"}}></div>
    )
}

export default ProgressBar
