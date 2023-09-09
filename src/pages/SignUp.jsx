import { useState } from "react";
import FormInput from "../components/Form/FormInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { supabase } from "../libs/supabaseClient";

const Login = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (formData) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    if (error) console.warn(error);
  };

  return (
    <div className="h-full w-full bg-white px-12 py-44">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-[#333] mb-2 text-center">
          Create Your Bug Tracker Account
        </h2>
        <div className="flex justify-center">
          <p className="text-[#666] text-lg text-center max-w-[80%] ">
            Join our bug tracking community and start managing your projects
            with ease. Sign up now to report, track, and resolve bugs
            efficiently.{" "}
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md shadow-sm w-[70%] mx-auto flex flex-col gap-6"
      >
        <FormInput register={register} errors={errors} label="name" />
        <FormInput register={register} errors={errors} label="email" />
        <FormInput
          register={register}
          errors={errors}
          label="password"
          type={"password"}
        />
        <button className="btn btn-active btn-neutral">Submit</button>
      </form>
      <div className="flex justify-center mt-8 text-[#339af0] font-medium">
        <Link to="/login">Have an Account Login Instead</Link>
      </div>
    </div>
  );
};
export default Login;
