import React from "react";
import axios from "axios";

const Main = () => {
  return (
    <div>
      <div className="getUsers" onClick={getUsers}>
        Get Users
      </div>
    </div>
  );
};

async function getUsers() {
  let res = await axios.get(
    "https://projectfirefly-staging.herokuapp.com/users"
  );
  let users = res.data;
  console.log(users);
}

export default Main;
