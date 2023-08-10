import React, { useState } from "react";
import {
  Button,
  Divider,
  Form,
  Input,
  Layout,
  Modal,
  Table,
  Tooltip,
  TreeSelect,
} from "antd";
import TopHeader from "../components/TopHeader";
import Sidebar from "../components/Sidebar";
import {
  CheckCircleOutlined,
  EyeOutlined,
  ExportOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Content } = Layout;

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [svalue, setsValue] = useState();
  const onChange = (newValue) => {
    setsValue(newValue);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "2",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "3",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "4",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "5",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "6",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "7",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "8",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "9",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "10",
      name: "John",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
  ];

  const columns = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Job Title",
      dataIndex: "jobtitle",
      key: "jobtitle",
    },
    {
      title: "Last Verified",
      dataIndex: "lastverified",
      key: "lastverified",
    },
    {
      title: "Verified",
      align: "center",
      render: () => {
        return (
          <Tooltip title="Verified">
            <CheckCircleOutlined className="text-[#333] text-md" />
          </Tooltip>
        );
      },
    },
    {
      title: "Action",
      align: "center",
      render: () => {
        return (
          <Link target="_blank" to="/user-detail">
            <Tooltip title="View Detail">
              <EyeOutlined className="text-[#333] cursor-pointer" />
            </Tooltip>
          </Link>
        );
      },
    },
  ];

  const treeData = [
    {
      value: "name",
      title: "Name",
    },
    {
      value: "email",
      title: "Email",
    },
    {
      value: "phone",
      title: "Phone",
    },
    {
      value: "city",
      title: "City",
    },
    {
      value: "state",
      title: "State",
    },
    {
      value: "country",
      title: "Country",
    },
  ];

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <TopHeader />
        <Content className="mainContent mt-6 exportContent">
          <div className="mb-4 flex justify-between searchInput">
            <div className="w-full">
              <Input
                className="w-full"
                size="large"
                placeholder="HR Manager"
                suffix={
                  <Tooltip title="Search">
                    <Link to="/search" className="cursor-pointer">
                      <Button type="primary" className="bg-[--primary-color]">
                        Search
                      </Button>
                    </Link>
                  </Tooltip>
                }
              />
            </div>
            <div className="bg-white w-20 flex justify-center px-4 gap-4 items-center ms-4 shadow">
              <Tooltip title="Export">
                <ExportOutlined
                  onClick={showModal}
                  className="cursor-pointer"
                />
              </Tooltip>
              <Tooltip title="Refresh">
                <ReloadOutlined className="cursor-pointer" />
              </Tooltip>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={columns}
            className="exportTable"
          />
          <Modal
            title={<div className="text-xl font-semibold">Export Details</div>}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <Divider />
            <Form layout={"vertical"}>
              <Form.Item label="Export Name">
                <Input placeholder="Enter export name" />
              </Form.Item>
              <Form.Item label="Size Per Page">
                <Input placeholder="Enter Size" />
                <span className=" text-gray-400">
                  Please enter value between 500-10000
                </span>
              </Form.Item>
              <Form.Item label="Choose Columns">
                <TreeSelect
                  className="multiSelect"
                  showSearch
                  style={{
                    width: "100%",
                  }}
                  value={svalue}
                  placeholder="Choose Columns"
                  allowClear
                  multiple
                  onChange={onChange}
                  treeData={treeData}
                />
              </Form.Item>
              <Form.Item className="flex justify-end">
                <Button className="bg-[--primary-color]" type="primary">
                  Export
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Search;
