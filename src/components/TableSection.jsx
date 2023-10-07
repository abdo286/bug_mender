import PropTypes from "prop-types";
import { RTable } from "./RTable_";
import classNames from "classnames";
import Loading from "./Loading";
import Error from "./Error";

const TableSection = ({
  title,
  columns,
  data,
  loading,
  error,
  tableContainerClassName,
}) => {
  const tableContainerClasses = classNames(
    "bg-transparent",
    "shadow-none",
    tableContainerClassName
  );

  return (
    <section>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <section className="bg-white px-10 py-6 mt-8 ">
          <h2 className="text-2xl font-medium">{title}</h2>
          <div>
            <RTable
              columns={columns}
              data={data}
              tableContainerClassName={tableContainerClasses}
            />
          </div>
        </section>
      )}
    </section>
  );
};

TableSection.propTypes = {
  tableContainerClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      Cell: PropTypes.func,
      canSort: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default TableSection;
