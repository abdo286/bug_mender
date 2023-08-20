const TicketAttachments = () => {
  return (
    <div>
      <div className="bg-white h-fit shadow-md">
        <header className="bg-[#22b8cf] px-6 py-3">
          <h3 className=" text-white">
            Attach File <span>(1)</span>
          </h3>
        </header>
        <section className="bg-white px-6 py-5 flex flex-col gap-2 mt-3">
          <form action="">
            <div className="flex col gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Add Description"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-info w-full max-w-xs "
                />
              </div>
            </div>
            <div className="flex justify-end mt-16">
              <button className="btn btn-neutral">Upload</button>;
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
export default TicketAttachments;
