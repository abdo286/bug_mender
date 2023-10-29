import FormInput from "../components/Form/FormInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabaseClient";
import { toast } from "react-toastify";
import useResponsiveContext from "../context/ResponsiveContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });
  const navigate = useNavigate();
  const { isLg } = useResponsiveContext();

  const onSubmit = async (formData) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      console.log(error);
      toast.error("There was an error, Pleas try to log in again");
      return;
    }
    navigate("/");
    reset();
  };

  return (
    <main className="h-full w-full lg:bg-white xl:px-12 pt-6 lg:py-44">
      <section className="mb-3 lg:mb-6">
        <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-semibold text-gray-100 lg:text-[#333] mb-1 lg:mb-2 text-center">
          Welcome Back!
        </h2>
        <p className="xl:text-lg text-center text-sm  lg:text-gray-500   text-gray-100">
          Log in to your account to access the bug tracking system.
        </p>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md shadow-sm w-[80%] md:w-[70%] mx-auto flex flex-col gap-3 xl:gap-6"
      >
        <FormInput
          register={register}
          errors={errors}
          label="email"
          placeholder="John Doe"
          labelClassName={!isLg ? " text-gray-200" : ""}
          errorsClassName={
            !isLg
              ? "text-blue-200 bg-red-500 font-bold w-fit px-3 text-sm rounded-md mt-1"
              : ""
          }
          inputClassName={!isLg ? "bg-gray-100" : ""}
        />
        <FormInput
          register={register}
          errors={errors}
          label="password"
          type={"password"}
          placeholder="Password"
          labelClassName={!isLg ? " text-gray-200" : ""}
          errorsClassName={
            !isLg
              ? "text-blue-200 bg-red-500 font-bold w-fit px-3 text-sm rounded-md mt-1"
              : ""
          }
          inputClassName={!isLg ? "bg-gray-100" : ""}
        />
        <button className="btn btn-active btn-neutral text-sm xl:text-base">
          Log In
        </button>
      </form>{" "}
      <div className="flex justify-center pt-3 text-gray-100 lg:text-[#339] text-sm xl:text-base xl:font-medium">
        <Link to="/sign-up">Don&apos;t Have an Account Sign up Instead</Link>
      </div>
    </main>
  );
};
export default Login;
