import { Breadcrumbs } from "../components";
import useAuthContext from "../context/AuthContext";
import { AccountForm, UserBio } from "../features/Account/components";
import Loading from "./Loading";
import Error from "./Error";

const Account = () => {
  const { userProfile } = useAuthContext();

  if (!userProfile.data) <Loading />;
  if (userProfile.error) return <Error />;
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
          <UserBio userProfile={userProfile} />
        </article>
        <aside>
          <AccountForm userProfile={userProfile} />
        </aside>
      </section>
    </main>
  );
};

export default Account;
