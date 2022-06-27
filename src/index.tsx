import React from "react";
import ReactDOM from "react-dom";
import DateTimePicker from "./organisms/DateTimePicker";
import DatePicker from "./organisms/DateTimePicker/DatePicker";
import "./global.css";
import { FilterBar } from "./organisms";

const App = () => {
  return (
    <div className="w-screen m-[150px]">
      <FilterBar />
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
