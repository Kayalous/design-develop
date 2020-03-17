import React from "react";

import Navbar from "./Navbar";
import Livechat from "./Livechat";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden relative App">
      <Navbar />
      <Livechat />
    </div>
  );
}

export default App;
