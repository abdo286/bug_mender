import { nanoid } from "nanoid";
import { Breadcrumbs } from "../components";

const options = [
  {
    key: nanoid(),
    text: "account",
    to: "/account",
  },
];

const Account = () => {
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[90%] mx-auto"></section>
    </div>
  );
};
export default Account;
