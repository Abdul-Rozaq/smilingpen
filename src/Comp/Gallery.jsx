import React from 'react';
import image from "../img/anchor.jpg";
import "../css/Gallery.css";

const Gallery = ({ data, setSelectedImg }) => {
    return (
        <div className='gallery'>
            {
                data.map(({id, data}) => (
                    <div className="gallery__imgwrap" key={id} onClick={() => setSelectedImg(data.img)}>
                        <img src={data.img} alt="imag"/>
                    </div>  
                ))
            }
        </div>
    )
}

export default Gallery
