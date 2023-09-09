import React from "react";
import CSSMotionList from "rc-animate/lib/CSSMotionList";
import classNames from "classnames";
import toArray from "rc-util/lib/Children/toArray";
import Table from "rc-table";

import styled from "styled-components";

const MotionBody = ({ children, ...props }) => {
  const nodeList = toArray(children);
  const nodesRef = React.useRef({});

  // Better apply clean up logic to avoid OOM
  const keys = [];
  nodeList.forEach((node) => {
    const { key } = node;
    nodesRef.current[key] = node;
    keys.push(key);
  });

  return (
    <tbody {...props}>
      <CSSMotionList keys={keys} component={false} motionName="move">
        {({ key, className }) => {
          const node = nodesRef.current[key];
          return React.cloneElement(node, {
            className: classNames(node.props.className, className),
          });
        }}
      </CSSMotionList>
    </tbody>
  );
};

class Demo extends React.Component {
  columns = [
    { title: "title1", dataIndex: "a", key: "a", width: 100 },
    { id: "123", title: "title2", dataIndex: "b", key: "b", width: 100 },
    { title: "title3", dataIndex: "c", key: "c", width: 200 },
    {
      title: "Operations",
      dataIndex: "",
      key: "d",
      render: (text, record) => (
        <a onClick={(e) => this.onDelete(record.key, e)} href="#">
          Delete
        </a>
      ),
    },
  ];

  state = {
    data: [
      { a: "123", key: "1" },
      { a: "cdd", b: "edd", key: "2" },
      { a: "1333", c: "eee", key: "3" },
    ],
  };

  onDelete = (key, e) => {
    e.preventDefault();
    this.setState(({ data }) => ({
      data: data.filter((item) => item.key !== key),
    }));
  };

  onAdd = () => {
    this.setState(({ data }) => ({
      data: [
        ...data,
        {
          a: "new data",
          b: "new data",
          c: "new data",
          key: Date.now(),
        },
      ],
    }));
  };

  render() {
    return (
      <div style={{ margin: 20 }}>
        <h2 className="text-xl font-semibold mb-5">Tickets</h2>
        <animationWrapper className="w-full">
          <Wrapper className="w-full">
            <Table
              columns={this.columns}
              data={this.state.data}
              components={{
                body: { wrapper: MotionBody },
              }}
            />
          </Wrapper>
        </animationWrapper>
      </div>
    );
  }
}

export default Demo;

const Wrapper = styled.div`
  .rc-table {
    position: relative;
    box-sizing: border-box;
    color: #666;
    font-size: 12px;
    line-height: 1.5;
  }
  .rc-table-rtl {
    direction: rtl;
  }
  .rc-table table {
    width: 100%;
    border-spacing: 0px;
  }
  .rc-table th,
  .rc-table td {
    position: relative;
    box-sizing: border-box;
    padding: 0;
    padding: 16px 8px;
    white-space: normal;
    word-break: break-word;
    border: 1px solid #ced4da;
    border-top: 0;
    border-left: 0;
    transition: box-shadow 0.3s;
  }

  .rc-table th {
    background-color: #343a40 !important;
    color: white !important;
  }
  .rc-table-rtl.rc-table th,
  .rc-table-rtl.rc-table td {
    border-right: 0;
    border-left: 1px solid #ced4da;
  }
  .rc-table-cell {
    background: #f4f4f4;
    color: black;
  }
  .rc-table-cell-fix-left,
  .rc-table-cell-fix-right {
    z-index: 2;
  }
  .rc-table-cell-fix-right:last-child:not(.rc-table-cell-fix-sticky) {
    border-right-color: transparent;
  }
  .rc-table-rtl .rc-table-cell-fix-right:last-child {
    border-right-color: #ced4da;
  }
  .rc-table-rtl .rc-table-cell-fix-left:last-child {
    border-left-color: transparent;
  }
  .rc-table-rtl .rc-table-cell-fix-left-first {
    box-shadow: 1px 0 0 #ced4da;
  }
  .rc-table-cell-fix-left-first::after,
  .rc-table-cell-fix-left-last::after {
    position: absolute;
    top: 0;
    right: -1px;
    bottom: -1px;
    width: 20px;
    transform: translateX(100%);
    transition: box-shadow 0.3s;
    content: "";
    pointer-events: none;
  }
  .rc-table-cell-fix-left-all::after {
    display: none;
  }
  .rc-table-cell-fix-right-first,
  .rc-table-cell-fix-right-last {
    box-shadow: -1px 0 0 #ced4da;
  }
  .rc-table-rtl .rc-table-cell-fix-right-first,
  .rc-table-rtl .rc-table-cell-fix-right-last {
    box-shadow: none;
  }
  .rc-table-cell-fix-right-first::after,
  .rc-table-cell-fix-right-last::after {
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -1px;
    width: 20px;
    transform: translateX(-100%);
    transition: box-shadow 0.3s;
    content: "";
    pointer-events: none;
  }
  .rc-table-cell.rc-table-cell-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-left-first,
  .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-left-last,
  .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-right-first
    .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-right-last {
    overflow: visible;
  }
  .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-left-first
    .rc-table-cell-content,
  .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-left-last
    .rc-table-cell-content,
  .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-right-first
    .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-right-last
    .rc-table-cell-content {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rc-table-cell.rc-table-cell-row-hover {
    background: #f1f3f5;
  }
  .rc-table-ping-left .rc-table-cell-fix-left-first::after,
  .rc-table-ping-left .rc-table-cell-fix-left-last::after {
    box-shadow: inset 10px 0 8px -8px green;
  }
  .rc-table-ping-right .rc-table-cell-fix-right-first::after,
  .rc-table-ping-right .rc-table-cell-fix-right-last::after {
    box-shadow: inset -10px 0 8px -8px green;
  }
  .rc-table-expand-icon-col {
    width: 60px;
  }
  .rc-table-row-expand-icon-cell {
    text-align: center;
  }
  .rc-table thead th {
    text-align: center;
    background: #f7f7f7;
  }
  .rc-table thead .rc-table-cell-scrollbar::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    width: 1px;
    background: #f7f7f7;
    content: "";
  }
  .rc-table-rtl.rc-table thead .rc-table-cell-scrollbar::after {
    right: -1px;
    left: auto;
  }
  .rc-table-header {
    border: 1px solid #ced4da;
    border-right: 0;
    border-bottom: 0;
  }
  .rc-table-placeholder {
    text-align: center;
  }
  .rc-table tbody tr td {
    background: #fff;
  }
  .rc-table tbody tr th {
    background: #f7f7f7;
  }
  .rc-table-content {
    border: 1px solid #ced4da;
    border-right: 0;
    border-bottom: 0;
    border-radius: 5px 0 0 0;
  }
  .rc-table-body {
    border: 1px solid #ced4da;
    border-right: 0;
    border-bottom: 0;
    border-top: 0;
  }
  .rc-table-fixed-column .rc-table-body::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    border-right: 1px solid #ced4da;
    content: "";
  }
  .rc-table-expanded-row .rc-table-cell {
    box-shadow: inset 0 8px 8px -8px green;
  }
  .rc-table-expanded-row-fixed {
    box-sizing: border-box;
    margin: -16px -8px;
    margin-right: -10px;
    padding: 16px 8px;
  }
  .rc-table-expanded-row-fixed::after {
    position: absolute;
    top: 0;
    right: 1px;
    bottom: 0;
    width: 0;
    border-right: 1px solid #ced4da;
    content: "";
  }
  .rc-table-row-expand-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: #aaa;
    line-height: 16px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid currentColor;
    cursor: pointer;
  }
  .rc-table-row-expand-icon.rc-table-row-expanded::after {
    content: "-";
  }
  .rc-table-row-expand-icon.rc-table-row-collapsed::after {
    content: "+";
  }
  .rc-table-row-expand-icon.rc-table-row-spaced {
    visibility: hidden;
  }
  .rc-table-title {
    padding: 16px 8px;
    border: 1px solid #ced4da;
    border-bottom: 0;
  }
  .rc-table-caption {
    padding: 16px 8px;
    border-right: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
  }
  .rc-table-footer {
    padding: 16px 8px;
    border: 1px solid #ced4da;
    border-top: 0;
  }
  .rc-table tfoot td {
    background: #fff;
  }
  .rc-table-summary {
    border-top: 1px solid #ced4da;
    border-left: 1px solid #ced4da;
  }
  .rc-table-sticky-holder {
    position: sticky;
    z-index: 2;
  }
  .rc-table-sticky-scroll {
    position: sticky;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    border-top: 1px solid #f3f3f3;
    opacity: 0.6;
    transition: transform 0.1s ease-in 0s;
  }
  .rc-table-sticky-scroll:hover {
    transform: scaleY(1.2);
    transform-origin: center bottom;
  }
  .rc-table-sticky-scroll-bar {
    height: 8px;
    background-color: #bbb;
    border-radius: 4px;
  }
  .rc-table-sticky-scroll-bar:hover {
    background-color: #999;
  }
  .rc-table-sticky-scroll-bar-active {
    background-color: #999;
  }
`;

const animationWrapper = styled.div`
  .move {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .move-appear-active {
    animation-name: move-in;
    animation-play-state: running;
  }
  .move-leave {
    opacity: 1;
  }
  .move-leave-active {
    animation-name: move-out;
    animation-play-state: running;
  }
  @keyframes move-in {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes move-out {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-20px);
    }
  }
`;
