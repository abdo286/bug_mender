export default [
  {
    key: "created",
    title: "created",
    dataKey: "created",
    width: 150,
    resizable: true,
    sortable: true,
  },
  {
    key: "property",
    title: "property",
    dataKey: "property",
    width: 100,
    resizable: true,
    sortable: true,
  },
  {
    key: "old value",
    title: "old value",
    dataKey: "old value",
    width: 100,
    resizable: true,
    sortable: true,
  },
  {
    key: "new value",
    title: "new value",
    dataKey: "new value",
    width: 100,
    resizable: true,
    sortable: true,
  },
  {
    key: "user",
    title: "user",
    dataKey: "user",
    width: 100,
    resizable: true,
    sortable: true, //     align: Column.Alignment.CENTER,
  },
];
// align: Column.Alignment.Start,
// frozen: Column.FrozenDirection.LEFT,
// cellRenderer: ({ cellData: gender }) => <Gender gender={gender} />,
//dataGetter: ({ column, rowData }) =>
//       rowData[column.dataKey].toLocaleDateString(),
//     headerRenderer: () => <Attachment>?</Attachment>,
//     cellRenderer: ({ cellData }) => <Attachment>{cellData}</Attachment>,
//     cellRenderer: ({ rowData }) => (
//       <button
//         onClick={() => {
//           this.setState({
//             data: this.state.data.filter((x) => x.id !== rowData.id),
//           });
//         }}
//       >
//         Remove
//       </button>
//     ),
//   },

// // key: "key-name", width: width-value, align:Column.Alignment.CENTER, frozen: Column.FrozenDirection.RIGHT.
// // cellRenderer: ({ rowData }) => (
// //   <button
// //     onClick={() => {
// //       this.setState({
// //         data: this.state.data.filter((x) => x.id !== rowData.id),
// //       });
// //     }}
// //   >
// //     Remove
// //   </button>
// // //     resizable: true,
// //    key: "address",
// //     title: "Address",
// //     dataKey: "address.street",
// //     width: 200,
