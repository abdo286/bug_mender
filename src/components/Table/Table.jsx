import { Resizable } from "react-resizable";
import Table from "rc-table";
import "react-resizable/css/styles.css";
import "./index.css";
import { useState } from "react";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

const ProjectTable = ({ data, state: propState, title, sortByColor }) => {
  const [state, setState] = useState(propState);
  const components = {
    header: {
      cell: ResizableTitle,
    },
  };

  const handleResize =
    (index) =>
    (e, { size }) => {
      setState(({ columns }) => {
        const nextColumns = [...columns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return { columns: nextColumns };
      });
    };

  const columns = state.columns.map((col, index) => {
    return {
      ...col,
      onHeaderCell: (column) => ({
        width: column.width,
        onResize: handleResize(index),
      }),
    };
  });

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-5">{title}</h2>
      <section className="flex">
        <form action="" className="flex gap-16 ml-auto">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Search
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="grid-first-name"
              type="text"
              placeholder="Search"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Sort By
            </label>
            <select
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="grid-last-name ${sortByColor}`}
            >
              <option value="">Name (A-Z)</option>
              <option value="">Name (Z-A)</option>
              <option value="">Priority</option>
              <option value="">Start Date</option>
              <option value="">End Date</option>{" "}
            </select>
          </div>
        </form>
      </section>
      <Table components={components} columns={columns} data={data} />
    </div>
  );
};

export default ProjectTable;
