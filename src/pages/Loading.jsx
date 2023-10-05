import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <FaSpinner className="animate-spin text-4xl text-blue-500 mb-4" />
      <h1 className="text-2xl font-bold">Loading...</h1>
    </main>
  );
};

export default Loading;
