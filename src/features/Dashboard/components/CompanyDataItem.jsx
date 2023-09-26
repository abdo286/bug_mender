import { getColorRGB } from "../utils/color";

const CompanyDataItem = ({ Icon, name, number, numberColor }) => {
  const rgbValues = getColorRGB(numberColor);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 text-gray-600">
        <Icon className="text-2xl" />
        <p>{name}</p>
      </div>
      <div
        className="border-2 px-2 py-1 text-sm "
        style={{
          color: `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 1)`,
          borderColor: `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]},0.3)`,
        }}
      >
        <p>{number}</p>
      </div>
    </div>
  );
};
export default CompanyDataItem;
