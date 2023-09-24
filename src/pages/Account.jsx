import { nanoid } from "nanoid";
import { Breadcrumbs } from "../components";
import { Header, UserBio } from "../features/Account/components";

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
      <section className="w-[90%] mx-auto mt-12 grid grid-cols-2 grid-rows-1 gap-12">
        <div>
          <UserBio />
        </div>
        <Header />
      </section>
    </div>
  );
};
export default Account;
