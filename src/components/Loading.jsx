import { FaSpinner } from "react-icons/fa";

const Loading = () => (
  <section className="flex flex-col items-center justify-center h-full">
    <FaSpinner className="animate-spin text-4xl text-gray-600" />
    <p className="mt-4 text-gray-600 font-medium text-lg">Loading...</p>
  </section>
);

export default Loading;
