export const UserStatCard = ({ Icon, name, number }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#f1f3f5] py-3 px-3">
        <Icon className="text-xl" />
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-gray-700">{name}</p>
        <p className="text-xl font-medium">{number}</p>
      </div>
    </div>
  );
};
//FaUser
