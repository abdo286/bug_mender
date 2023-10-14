import FormInput from "../components/Form/FormInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabaseClient";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (formData) => {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    const { error: userError } = await supabase
      .from("profiles")
      .insert({ email: formData.email, name: formData.name });

    if (error) {
      toast.error(error);
      console.log(error);
    }
    if (userError) {
      toast.error(userError);
      console.log(userError);
    }

    if (!error && !userError) {
      toast.info("A sign-up confirmation was sent to your email.", {
        onClick: () => {
          navigate("/login");
        },
        autoClose: 5000,
      });

      setTimeout(() => {
        navigate("/login");
        reset();
      }, 5000);
    }
  };

  return (
    <main className="h-full w-full bg-white xl:px-12 pt-8 lg:py-44">
      <div className="mb-3 lg:mb-6">
        <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-semibold text-[#333] mb-1 lg:mb-2 text-center">
          Create Your Bug Tracker Account
        </h2>
        <div className="flex justify-center">
          <p className="xl:text-lg text-center max-w-[85%] xl:max-w-[80%] lines-5 text-sm text-gray-500">
            Join our bug tracking community and start managing your projects
            with ease.
            <span className="sm:block lg:inline">
              Sign up now to report, track, and resolve bugs efficiently.
            </span>
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md shadow-sm w-[80%] md:w-[70%] mx-auto flex flex-col gap-3 xl:gap-6"
      >
        <FormInput
          register={register}
          errors={errors}
          label="name"
          placeholder="John Doe"
        />
        <FormInput
          register={register}
          errors={errors}
          label="email"
          placeholder="Email"
        />
        <FormInput
          register={register}
          errors={errors}
          label="password"
          type={"password"}
          placeholder="Password"
        />
        <button className="btn btn-active btn-neutral text-sm xl:text-base">
          Submit
        </button>
      </form>
      <div className="flex justify-center mt-4 text-[#339af0] text-sm xl:text-base xl:font-medium">
        <Link to="/login">Have an Account Login Instead</Link>
      </div>
    </main>
  );
};
export default Login;
