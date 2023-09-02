import { useState } from "react";
import { Breadcrumbs } from "../components";
import { FormInput, FormSelect } from "../components";
import ReactQuill from "react-quill";
import { nanoid } from "nanoid";

const options = [
  {
    key: nanoid(),
    text: "tickets",
    to: "/tickets",
  },
  {
    key: nanoid(),
    text: "create-ticket",
    to: "/create-ticket",
  },
];

const CreateTicket = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[60%] bg-white mx-auto pt-5 gap-12 px-8 rounded-md shadow-md ">
        <form className="flex flex-col gap-5">
          <FormInput label="Title" />
          <section className="flex flex-col gap-2 my-3">
            <p className="font-semibold">Description</p>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </section>
          <FormSelect label="Type" />
          <FormSelect label="Priority" />
          <FormSelect label="Category" />
          <FormSelect label="Project" />
          <FormSelect label="Status" />
          <div className="flex justify-between my-8">
            <button className="btn" type="button">
              Cancel
            </button>
            <button className="btn btn-neutral">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default CreateTicket;
