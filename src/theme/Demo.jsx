import React from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { actualTheme, toggleTheme, set } from "./themeSlice";
function Demo() {
  const store = useStore();
  console.log('store', store);
  console.log("state global", store.getState())

  const { theme } = useSelector(actualTheme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  const setTheme = () => {
    dispatch(set("solar"));
  };
  return (
    <div>
      <h1>Demo 1</h1>
      le thème actuel est : {theme}
      <button onClick={changeTheme}>Changer le thème depuis Demo</button>
      <button onClick={setTheme}>Definir le thème depuis Demo</button>
    </div>
  );
}

export default Demo;
