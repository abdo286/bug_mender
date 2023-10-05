import { Breadcrumbs } from "../components";
import { Header, UserBio } from "../features/Account/components";

const options = [
  {
    key: "account",
    text: "account",
    to: "/account",
  },
];

const Account = () => {
  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs optionsData={options} />
      </nav>
      <section className="w-[90%] mx-auto mt-12 grid grid-cols-2 grid-rows-1 gap-12">
        <article>
          <UserBio />
        </article>
        <aside>
          <Header />
        </aside>
      </section>
    </main>
  );
};

export default Account;
