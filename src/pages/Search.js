import React, { useState } from "react";
import {
  Button,
  Divider,
  Form,
  Input,
  Layout,
  Modal,
  Table,
  Tabs,
  Tooltip,
  TreeSelect,
} from "antd";
import TopHeader from "../components/TopHeader";
import Sidebar from "../components/Sidebar";
import UserDetail from "./UserDetail";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EyeOutlined,
  ExportOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Content } = Layout;

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDModalOpen, setIsDModalOpen] = useState(false);
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

  const showDModal = () => {
    setIsDModalOpen(true);
  };
  const handleDCancel = () => {
    setIsDModalOpen(false);
  };

  const totalData = [
    {
      key: "1",
      name: "Nike",
      area: "Downing Street",
      phone: 7876543210,
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "2",
      name: "Arun",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "bhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "3",
      name: "Saurav",
      area: "10 Downing Street",
      phone: 8876543210,
      email: "chonedoe@gmail.com",
      jobtitle: "HR Manager",
      lastverified: "15 Jan 2022",
    },
    {
      key: "4",
      name: "Tarun",
      area: "10 Downing Street",
      phone: 7876543210,
      email: "dhonedoe@gmail.com",
      jobtitle: "Node JS Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "5",
      name: "Zack",
      area: "10 Downing Street",
      phone: 6876543210,
      email: "ehonedoe@gmail.com",
      jobtitle: "React JS Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "6",
      name: "Kelvin",
      area: "10 Downing Street",
      phone: 5876543210,
      email: "fhonedoe@gmail.com",
      jobtitle: "Dot Net Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "7",
      name: "Kumar",
      area: "10 Downing Street",
      phone: 4876543210,
      email: "ghonedoe@gmail.com",
      jobtitle: "Java Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "8",
      name: "Nithesh",
      area: "10 Downing Street",
      phone: 3876543210,
      email: "hhonedoe@gmail.com",
      jobtitle: "PHP Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "9",
      name: "Mahesh",
      area: "10 Downing Street",
      phone: 2876543210,
      email: "ihonedoe@gmail.com",
      jobtitle: "Software Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "10",
      name: "Himesh",
      area: "10 Downing Street",
      phone: 1876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Back End Developer",
      lastverified: "15 Jan 2022",
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "ahonedoe@gmail.com",
      jobtitle: "Python Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "2",
      name: "Arun",
      area: "10 Downing Street",
      phone: 9876543210,
      email: "bhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "3",
      name: "Saurav",
      area: "10 Downing Street",
      phone: 8876543210,
      email: "chonedoe@gmail.com",
      jobtitle: "HR Manager",
      lastverified: "15 Jan 2022",
    },
    {
      key: "4",
      name: "Tarun",
      area: "10 Downing Street",
      phone: 7876543210,
      email: "dhonedoe@gmail.com",
      jobtitle: "Node JS Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "5",
      name: "Zack",
      area: "10 Downing Street",
      phone: 6876543210,
      email: "ehonedoe@gmail.com",
      jobtitle: "React JS Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "6",
      name: "Kelvin",
      area: "10 Downing Street",
      phone: 5876543210,
      email: "fhonedoe@gmail.com",
      jobtitle: "Dot Net Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "7",
      name: "Kumar",
      area: "10 Downing Street",
      phone: 4876543210,
      email: "ghonedoe@gmail.com",
      jobtitle: "Java Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "8",
      name: "Nithesh",
      area: "10 Downing Street",
      phone: 3876543210,
      email: "hhonedoe@gmail.com",
      jobtitle: "PHP Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "9",
      name: "Mahesh",
      area: "10 Downing Street",
      phone: 2876543210,
      email: "ihonedoe@gmail.com",
      jobtitle: "Software Developer",
      lastverified: "15 Jan 2022",
    },
    {
      key: "10",
      name: "Himesh",
      area: "10 Downing Street",
      phone: 1876543210,
      email: "jhonedoe@gmail.com",
      jobtitle: "Back End Developer",
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
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      sorter: (a, b) => a.area.localeCompare(b.area)
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone - b.phone
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email)
    },
    {
      title: "Job Title",
      dataIndex: "jobtitle",
      key: "jobtitle",
      sorter: (a, b) => a.jobtitle.localeCompare(b.jobtitle)
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
            <Tooltip title="View Detail">
              <EyeOutlined className="text-[#333] cursor-pointer" onClick={showDModal}/>
            </Tooltip>
        );
      },
    },
  ];

  const totalcolumns = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      sorter: (a, b) => a.area.localeCompare(b.area)
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone - b.phone
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email)
    },
    {
      title: "Job Title",
      dataIndex: "jobtitle",
      key: "jobtitle",
      sorter: (a, b) => a.jobtitle.localeCompare(b.jobtitle)
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
            <CloseCircleOutlined className="text-[#f34e4e] text-md" />
          </Tooltip>
        );
      },
    },
    {
      title: "Action",
      align: "center",
      render: () => {
        return (
            <Tooltip title="View Detail">
              <EyeOutlined className="text-[#333] cursor-pointer" onClick={showDModal}/>
            </Tooltip>
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

  const tabItems = [
    {
      label: `Total (1002)`,
      key: "total",
      children: (
        <Table
            dataSource={totalData}
            columns={totalcolumns}
            className="exportTable"
            sortDirections={["ascend", "descend"]}
          />
      ),
    },
    {
      label: `Saved (10)`,
      key: "saved",
      children: (
        <Table
            dataSource={dataSource}
            columns={columns}
            className="exportTable"
            sortDirections={["ascend", "descend"]}
          />
      ),
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
          <Tabs
            className="searchTabs"
            defaultActiveKey="total"
            type="card"
            size={"medium"}
            items={tabItems}
          />
          <Modal
            title={<div className="text-md font-semibold">Export Details</div>}
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
          <Modal
        title={<div className="text-md font-semibold ms-2 lg:ms-4">User Detail</div>}
        open={isDModalOpen}
        onCancel={handleDCancel}
        footer={null}
        className="userDetailModal"
      >
        <Divider />
        <UserDetail />
      </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Search;
