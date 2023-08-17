import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const options = [
  {
    key: nanoid(),
    text: "Home",
    to: "/",
  },
  {
    key: nanoid(),
    text: "Projects",
    to: "/projects",
  },
];

const Breadcrumbs = () => {
  return (
    <div className="text-sm breadcrumbs text-gray-800">
      <ul>
        {options.map((options) => {
          return (
            <li key={options.key}>
              <Link to={options.to}>{options.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Breadcrumbs;
