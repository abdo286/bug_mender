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

const ProjectTable = ({ data, state: propState, title }) => {
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
      <Table components={components} columns={columns} data={data} />
    </div>
  );
};

export default ProjectTable;
