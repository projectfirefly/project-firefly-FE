import React from "react";

const ProfileStore = React.createContext({
  profiles: [
    {
      name: "Alis",
      avatar: "../assets/svg/somefile.svg",
      level: 1,
      blockunlocked: 5,
      modelunlocked: 5
    },
    {}
  ]
});

export default ProfileStore;
