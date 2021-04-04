import React from 'react';
import { Share, ThumbDownAltOutlined, ThumbUpOutlined } from "@material-ui/icons";
import "../css/Gallery.css";

const Gallery = ({ data }) => {
    return (
        <div className='gallery'>
            {
                data.map(({id, data}) => (
                    <div className="gallery__img">
                        <div className="gallery__imgwrap" key={id}>
                            <img src={data.img} alt="imag"/>
                        </div> 
                        <div className="gallery__imgCTA">
                            <p>1 sun, 2019</p>
                            <div>
                                <Share />
                                <ThumbUpOutlined />
                                <ThumbDownAltOutlined />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery
