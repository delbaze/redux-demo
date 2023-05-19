import React from "react";
import Demo from "./theme/Demo";
import "./App.css";
import DemoApi from "./features/demoApi/DemoApi";

function App() {
  return (
    <div className="App">
      <Demo />
      <DemoApi />
    </div>
  );
}

export default App;
