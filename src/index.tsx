import React from "react";
import ReactDOM from "react-dom";
import DateTimePicker from "./organisms/DateTimePicker";
import DatePicker from "./organisms/DateTimePicker/DatePicker";
import "./global.css";
import { FilterBar, DataTable } from "./organisms";

const App = () => {
  return (
    <div className="w-screen m-[150px]">
      <FilterBar />
      <DataTable />
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
