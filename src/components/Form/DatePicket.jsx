import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicket = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="w-full">
      <p className="font-medium">Deadline</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="px-3 py-2 shadow-sm border-2 border-gray-200 hover:border-gray-300 transition-all ease-in-out duration-150 rounded-xl w-full outline-none hover:outline-none "
      />
    </div>
  );
};
export default DatePicket;
