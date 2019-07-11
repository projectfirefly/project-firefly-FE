import React from "react";
import axios from "axios";

const Main = () => {
  return (
    <div>
      <button className="getUsers" onClick={getUsers}>
        Get Users
      </button>
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
