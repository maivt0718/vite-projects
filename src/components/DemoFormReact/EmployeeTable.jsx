import { Space, Table, Tag } from "antd";
import React from "react";
import ButtonCustom from "./ButtonCustom";

const EmployeeTable = ({ data, handleDelete, handleUpdate }) => {
  const columns = [
    {
      title: <a>ID</a>,
      dataIndex: "identification",
      key: "identification",
      render: (text, record, index) => {
        return <span className="text-black-500 text-center">{text}</span>;
      },
    },
    {
      title: <a>Name</a>,
      dataIndex: "name",
      key: "name",
      render: (text, record, index) => {
        return <span className="text-black-500 text-center">{text}</span>;
      },
    },
    {
      title: <a>Email</a>,
      dataIndex: "email",
      key: "email",
      render: (text, record, index) => {
        return <span className="text-black-500 text-center">{text}</span>;
      },
    },
    {
      title: <a>Phone</a>,
      dataIndex: "phone",
      key: "phone",
      render: (text, record, index) => {
        return <span className="text-black-500 text-center">{text}</span>;
      },
    },
    {
      title: <a>DOB</a>,
      dataIndex: "dob",
      key: "dob",
      render: (text, record, index) => {
        return <span className="text-black-500 text-center">{text}</span>;
      },
    },
    {
      title: <a>Gender</a>,
      dataIndex: "gender",
      key: "gender",
      render: (text, record, index) => {
        return (
          <>
            <Tag
              color={
                text == "Female" ? "magenta" : text == "Male" ? "blue" : "green"
              }
            >
              {text}
            </Tag>
          </>
        );
      },
    },
    {
      title: <p className="text-center">Action</p>,
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div className="grid grid-cols-2 gap-2">
            <ButtonCustom
              content={"Delete"}
              onClick={() => {
                handleDelete(record.identification)
              }}
              bgColor="bg-yellow-500"
            ></ButtonCustom>
            <ButtonCustom content={"Update"} onClick={() => {handleUpdate(record.identification)}}></ButtonCustom>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mt-10">
      <Table dataSource={data} columns={columns} />;
    </div>
  );
};

export default EmployeeTable;
