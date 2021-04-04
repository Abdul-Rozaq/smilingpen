import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import UploadForm from './UploadImage/UploadForm';
import imeg from "../img/anchor.jpg";
import WotdDefinition from './common/WotdDefinition';
import WotdExample from "./common/WotdExample";
import WotdSynonym from "./common/WotdSynonym";

const NewWotd = () => {
    const [image, setImage] = useState("");

    return (
        <>
            <AdminHeader />

            <div className="newQuote__cta">
                <Button variant="outlined">Save</Button>
                <Button variant="outlined">Publish</Button>
            </div>

            <div className="newWotd container">

                <div className="newQuote__img">
                    <p>Add image</p>
                    <UploadForm setImage={setImage} />
                    <div>
                    <img src={imeg} alt="hi"/>
                    </div>
                </div>

                <WotdDefinition />

                <WotdExample />

                <WotdSynonym />

            </div>
        </>
    )
}

export default NewWotd
