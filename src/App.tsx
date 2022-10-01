import React from "react";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTodo />
    </div>
  );
}

export default App;
