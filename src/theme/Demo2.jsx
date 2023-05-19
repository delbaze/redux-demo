import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actualTheme, toggleTheme } from "./themeSlice";
function Demo2() {
  const { theme } = useSelector(actualTheme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div>
      <h1>Demo 2</h1>
      le thème actuel est : {theme}
      <button onClick={changeTheme}>Changer le thème depuis Demo 2</button>
    </div>
  );
}

export default Demo2;
