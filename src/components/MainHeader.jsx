import { BsGrid } from "react-icons/bs";
import { BsTable } from "react-icons/bs";
import { Tooltip } from ".";
const MainHeader = ({ view, setView, text }) => {
  return (
    <div className="bg-white flex items-center justify-between py-5 px-8 mt-12">
      <section>
        {/* <h2>View</h2> */}
        <div className="flex items-center gap-6 ">
          <Tooltip
            trigger={
              <button>
                <BsGrid
                  className={`text-2xl ${
                    view === "grid" ? "text-gray-600" : "text-gray-500"
                  } cursor-pointer text-gray-500 hover:text-gray-600 transition-all ease-in-out duration-100`}
                  onClick={() => setView("grid")}
                />
              </button>
            }
            text={"Grid View"}
          />
          <Tooltip
            trigger={
              <button>
                <BsTable
                  className={`text-2xl ${
                    view === "table" ? "text-gray-600" : "text-gray-500"
                  } cursor-pointer hover:text-gray-600 transition-all ease-in-out duration-100`}
                  onClick={() => setView("table")}
                />
              </button>
            }
            text={"Table View"}
          />
        </div>
      </section>
      <section className="flex justify-end w-full">
        <button className="text-sm font-medium bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in-out text-white px-4 py-3 rounded-xl ">
          Create {text}
        </button>
      </section>
    </div>
  );
};
export default MainHeader;
