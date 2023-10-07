import { Breadcrumbs } from "../components";
import { Header, UserBio } from "../features/Account/components";

const Account = () => {
  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={{
            key: "account",
            text: "account",
            to: "/account",
          }}
        />
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
