import React from "react";

import Navbar from "./Navbar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden relative App">
      <Navbar />
    </div>
  );
}

export default App;
