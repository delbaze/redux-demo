import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync } from "./demoApiSlice";
import { users } from "./demoApiSlice";
function DemoApi() {
  const dispatch = useDispatch();
  const data = useSelector(users);

  const getUsersData = () => {
    dispatch(fetchUsersAsync());
  };
  return (
    <div>
      DemoApi
      <button onClick={getUsersData}>Récupérer les users</button>
      <ul>
        {data?.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemoApi;
