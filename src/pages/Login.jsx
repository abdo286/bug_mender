import FormInput from "../components/Form/FormInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabaseClient";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });
  const navigate = useNavigate();

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
  // className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-8"

  return (
    <main className="h-full w-full bg-white xl:px-12 pt-8 lg:py-44">
      <section className="mb-3 lg:mb-6">
        <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-semibold text-[#333] mb-1 lg:mb-2 text-center">
          Welcome Back!
        </h2>
        <p className="text-[#666] xl:text-lg text-center">
          Log in to your account to access the bug tracking system.
        </p>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md shadow-sm w-[80%] md:w-[70%] mx-auto flex flex-col gap-3 xl:gap-6"
      >
        <FormInput register={register} errors={errors} label="email" />
        <FormInput
          register={register}
          errors={errors}
          label="password"
          type={"password"}
        />
        <button className="btn btn-active btn-neutral text-sm xl:text-base">
          Submit
        </button>
      </form>{" "}
      <div className="flex justify-center mt-4 text-[#339af0] text-sm xl:text-base xl:font-medium">
        <Link to="/sign-up">Don&apos;t Have an Account Sign up Instead</Link>
      </div>
    </main>
  );
};
export default Login;
