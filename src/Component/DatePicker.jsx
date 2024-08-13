import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <div>
      <Flatpickr
        value={dateRange}
        onChange={(selectedDates) => {
          setDateRange(selectedDates);
        }}
        options={{
          mode: "range",
          dateFormat: "Y-m-d",
          altInput: true,
          altFormat: "F j, Y", // Example format: "July 23, 2024"
        }}
        placeholder="Select start and end dates" // Custom placeholder text
      />

      <Flatpickr
        value={dateRange}
        onChange={(selectedDates) => {
          setDateRange(selectedDates);
        }}
        options={{
          mode: "range",
          dateFormat: "Y-m-d",
          altInput: true,
          altFormat: "F j, Y", // Example format: "July 23, 2024"
        }}
        placeholder="Select start and end dates" // Custom placeholder text
      />
    </div>
  );
};

export default DateRangePicker;
