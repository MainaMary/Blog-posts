import React from "react";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <AddTodo />
    </div>
  );
}

export default App;
