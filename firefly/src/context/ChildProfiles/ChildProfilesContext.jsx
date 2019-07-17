import React from 'react'

const ChildProfilesContext = React.createContext({
    children: [
        {
            id: 0,
            name: "George",
            avatar: "G"
        },
        {
            id: 1,
            name: "Jorge",
            avatar: "J"
        },
        {
            id: 2,
            name: "Gyorg",
            avatar: "Gy"
        }
    ],
    selected: {}
});

export default ChildProfilesContext
