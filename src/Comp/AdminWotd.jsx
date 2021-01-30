import { MoreHoriz } from '@material-ui/icons';
import React, { useState } from 'react';
import delve from "../img/delve.jpeg";
import AdminModal from './AdminModal';

const AdminWotd = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="adminWotd">
                <div>
                    <p>1 jun, 2019</p>
                    <MoreHoriz onClick={() => setShowModal(true)} />
                </div>
                <img src={delve} alt="delve"/>
            </div>
            {showModal && (<AdminModal setShowModal={setShowModal} />)}
        </>
    )
}

export default AdminWotd
