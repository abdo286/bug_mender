import Select from "react-select";
import { Controller } from "react-hook-form";

const SelectSection = ({ label, name, control, options, errors }) => {
  return (
    <section className="mt-1">
      <p className="label-text font-semibold mb-2">{label}</p>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select {...field} isSearchable={true} options={options} />
        )}
      />
      {options.length > 0 && errors[name]?.type === "required" && (
        <p role="alert" className="text-sm text-red-600 mt-1">
          <span className="capitalize"> {label} </span>is required
        </p>
      )}
    </section>
  );
};

export default SelectSection;
