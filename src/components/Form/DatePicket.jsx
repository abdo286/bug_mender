import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ field }) => {
  const { name, value } = field;

  return (
    <div className="w-full">
      <label className="font-medium block mb-2">{name}</label>
      <DatePicker
        selected={value || new Date()}
        {...field}
        className="px-3 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all ease-in-out duration-150 rounded-lg w-full outline-none focus:border-blue-500"
      />
    </div>
  );
};

DatePickerField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
};

export default DatePickerField;
