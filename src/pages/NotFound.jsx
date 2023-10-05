import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops! 404 Error</h1>
      <p className="text-gray-600 text-center mb-8">
        We&apos;re sorry, but the page you&apos;re looking for could not be
        found.
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

export default NotFound;
