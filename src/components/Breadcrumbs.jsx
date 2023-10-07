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
    <div className="text-sm breadcrumbs text-gray-800">
      <ul>
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
