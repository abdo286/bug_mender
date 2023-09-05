// import BaseTable from "react-base-table";
// import columns from "../../constants/TicketHistoryColumns";
import "./TicketHistory.css";
import { Table } from "../../../../components";

// const dataGenerator = () => ({
//   id: "causal.id",
//   created: "war",
//   property: "causal.name",
//   ["old value"]: "causal.description",
//   ["new value"]: "causal.email",
//   user: "causal.country",
// });

// const defaultData = new Array(5000)
//   .fill(0)
//   .map(dataGenerator)
//   .sort((a, b) => (a.name > b.name ? 1 : -1));

const data = [
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
  {
    created: "8/6/2023",
    property: "title",
    oldValue: "title1",
    newValue: "title2",
    user: "user3",
    key: "1",
  },
];

const state = {
  columns: [
    { title: "Created", dataIndex: "created", key: "a" },
    { title: "Property", dataIndex: "property", key: "c" },
    { title: "Old Value", dataIndex: "oldValue", key: "b" },
    { title: "New Value", dataIndex: "newValue", key: "c" },
    { title: "User", dataIndex: "user", key: "c" },
  ],
};
// { data = defaultData }
const TicketHistory = () => {
  return (
    // <div className="bg-white pb-12 ">
    //   <header className="bg-[#22b8cf] px-6 py-3 mb-8">
    //     <h2 className="text-white">Ticket History</h2>
    //   </header>
    //   <div className="px-8">
    //     <BaseTable
    //       fixed
    //       estimatedRowHeight={40}
    //       data={data}
    //       columns={columns}
    //       width={600}
    //       height={330}
    //       className="!text-gray-600 shadow-md "
    //       headerClassName="capitalize bg-gray-600 text-white"
    //     />
    //   </div>{" "}
    // </div>
    <Table
      data={data}
      state={state}
      title="Ticket History"
      sortByColor="bg-white"
      className="!bg-white"
      shouldShowTitle={false}
      shouldShowTableFeatures={false}
      classNameTitle="bg-[#22b8cf] px-6 py-3 mb-8 text-white !text-base "
    />
  );
};

export default TicketHistory;
// key for each column
// data rows should be unique by a key. The key is by default a property called id
// width, height,
//  <div className="px-6">
//    {/* <BaseTable data={data } width={600} height={400}>
//       <Column key="col0" dataKey="col0" width={100} />
//       <Column key="col1" dataKey="col1" width={100} />
//     </BaseTable> */}{" "}
//  </div>;
