import PropTypes from "prop-types";
import Select from "react-select";
import { Controller } from "react-hook-form";

const SelectSection = ({ label, name, control, options, errors }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold capitalize text-sm lg:text-base">{label}</span>
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            isSearchable={true}
            options={options}
            className="select select-bordered font-normal text-gray-800 rounded-lg w-full outline-none focus:border-blue-500"
          />
        )}
      />
      {options.length > 0 && errors[name]?.type === "required" && (
        <p role="alert" className="text-sm text-red-600 mt-1">
          <span className="capitalize">{label}</span> is required
        </p>
      )}
    </div>
  );
};

SelectSection.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  errors: PropTypes.object.isRequired,
};

export default SelectSection;
