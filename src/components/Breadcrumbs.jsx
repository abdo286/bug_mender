import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ optionsData }) => {
  let options = [
    {
      key: nanoid(),
      text: "Home",
      to: "/",
    },
  ];

  if (Array.isArray(optionsData)) {
    options = [...options, ...optionsData];
  } else {
    options = [...options, optionsData];
  }

  return (
    <div className="text-[0.8rem] lg:text-sm breadcrumbs text-gray-600 w-[95%] mx-auto">
      <ul className="ml-8 sm:ml-0">
        {options.map((options) => {
          return (
            <li key={options.key}>
              <Link to={options.to} className="capitalize">
                {options.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Breadcrumbs;
