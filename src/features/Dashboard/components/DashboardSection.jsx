import PropTypes from "prop-types";
import { RTable } from "../../../components";

const Loading = () => <section>loading...</section>;

const Error = () => <section>There was an error</section>;

const DashboardSection = ({ title, columns, data, loading, error }) => (
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
            tableContainerClassName="bg-transparent shadow-none"
          />
        </div>
      </section>
    )}
  </section>
);

DashboardSection.propTypes = {
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

export default DashboardSection;
