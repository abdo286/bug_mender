import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const TicketComments = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="bg-white h-full shadow-md">
        <header className="bg-[#22b8cf] px-6 py-3">
          <h3 className=" text-white">
            Comments <span>(1)</span>
          </h3>
        </header>
        <section className="bg-white px-6 pt-5 pb-10 flex flex-col gap-2 mt-3">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
          <div className="flex justify-end mt-8">
            <button className="btn btn-neutral">Comment</button>;
          </div>
        </section>
      </div>
    </div>
  );
};
export default TicketComments;
