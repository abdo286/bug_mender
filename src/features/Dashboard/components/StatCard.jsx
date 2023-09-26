const StatCard = ({ color, backgroundColor, number, label }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full py-8 rounded-xl`}
      style={{ backgroundColor: backgroundColor || "", color: color || "" }}
    >
      <p className="text-xl mb-2">{number}</p>
      <p className="text-xs">{label}</p>
    </div>
  );
};
export default StatCard;
