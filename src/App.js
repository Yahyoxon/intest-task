import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import { HightlightClass } from "./utils/highlight-class";
import { getDateDetails } from "./utils/opener-alert";

function App() {
  return (
    <Calendar
      onClickDay={(value, event) => getDateDetails(value, event)}
      showNeighboringMonth={false}
      defaultValue={new Date("2022, 06, 30")}
      locale="uz-UZ"
      tileClassName={({ date, view }) => HightlightClass(date, view)}
    />
  );
}

export default App;
