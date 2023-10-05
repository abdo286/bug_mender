import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-gray-600 text-center mb-8">
        We&apos;re sorry, but there was an error processing your request. Please
        try again later.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home Page
      </Link>
    </main>
  );
};

export default Error;
