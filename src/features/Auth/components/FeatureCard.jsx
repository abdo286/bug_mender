const FeatureCard = ({ feature }) => {
  return (
    <div className="mb-6 flex justify-center">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl 2xl:text-3xl font-semibold text-[#dee2e6] mb-2 text-center">
          {feature.name}
        </h2>
        <p className="text-[#dee2e6] mx-auto mb-6 ">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
