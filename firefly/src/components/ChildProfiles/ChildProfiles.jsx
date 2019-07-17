import React, { useState, useEffect } from 'react';

import ChildProfileDialog from './ChildProfileDialog';

const ChildProfiles = () => {

    const [childProfiles, setChildProfiles] = useState([
        {
            name: "George",
            avatar: "G"
        },
        {
            name: "Jorge",
            avatar: "J"
        },
        {
            name: "Gyorg",
            avatar: "Gy"
        }
    ]);

    return (
        <>
            <ChildProfileDialog />
        </>
    )
}

export default ChildProfiles
