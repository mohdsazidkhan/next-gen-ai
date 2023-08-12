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
  LinkedinFilled,
  FacebookFilled,
  TwitterSquareFilled,
  EyeOutlined,
  ExportOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";

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
      name: "Aakas Sharma",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "2",
      name: "Suresh Kumar",
      gender: "Male",
      phone: 9876543210,
      country: "India",
      email: "bhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      organization: "Amazon",
      cScore: 25,
    },
    {
      key: "3",
      name: "Saurav Ganguly",
      gender: "Male",
      phone: 8876543210,
      country: "USA",
      email: "chonedoe@gmail.com",
      jobtitle: "HR Manager",
      organization: "Australia",
      cScore: 56,
    },
    {
      key: "4",
      name: "Tarun Sharma",
      gender: "Male",
      phone: 7876543210,
      country: "UK",
      email: "dhonedoe@gmail.com",
      jobtitle: "Node JS Developer",
      organization: "Flipkart",
      cScore: 67,
    },
    {
      key: "5",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "6",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "7",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "8",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "9",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "10",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "2",
      name: "Suresh Kumar",
      gender: "Male",
      phone: 9876543210,
      country: "India",
      email: "bhonedoe@gmail.com",
      jobtitle: "Front End Developer",
      organization: "Amazon",
      cScore: 25,
    },
    {
      key: "3",
      name: "Saurav Ganguly",
      gender: "Male",
      phone: 8876543210,
      country: "USA",
      email: "chonedoe@gmail.com",
      jobtitle: "HR Manager",
      organization: "Australia",
      cScore: 56,
    },
    {
      key: "4",
      name: "Tarun Kumar",
      gender: "Male",
      phone: 7876543210,
      country: "UK",
      email: "dhonedoe@gmail.com",
      jobtitle: "Node JS Developer",
      organization: "Flipkart",
      cScore: 67,
    },
    {
      key: "5",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "6",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "7",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "8",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "9",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
    {
      key: "10",
      name: "Aman Gupta",
      gender: "Male",
      phone: 7876543210,
      country: "India",
      email: "onedoe@gmail.com",
      jobtitle: "Dotnet Developer",
      organization: "GCP",
      cScore: 14,
    },
  ];

  const columns = [
    {
      title: "S.No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      align: "center",
      render: (record) => {
        return (
          <a href={`mailto:${record.email}`} className="text-[#1677ff] hover:text-[white]">
          {record.email}
        </a>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      //sorter: (a, b) => a.phone - b.phone,
    },
    {
      title: "Mobile",
      dataIndex: "phone",
      key: "phone",
      //sorter: (a, b) => a.phone - b.phone,
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      sorter: (a, b) => a.country.localeCompare(b.country),
    },
    {
      title: "Linkedin",
      render: () => {
        return (
          <Tooltip title="Linkedin">
            <LinkedinFilled />
          </Tooltip>
        );
      },
    },
    {
      title: "Facebook",
      render: () => {
        return (
          <Tooltip title="Facebook">
            <FacebookFilled />
          </Tooltip>
        );
      },
    },
    {
      title: "Twitter",
      render: () => {
        return (
          <Tooltip title="Twitter">
            <TwitterSquareFilled />
          </Tooltip>
        );
      },
    },
    {
      title: "Organization",
      align: "center",
      key: "organization",
      dataIndex: "organization"

    },
    {
    title: "Job Title",
    dataIndex: "jobtitle",
    key: "jobtitle",
    sorter: (a, b) => a.jobtitle.localeCompare(b.jobtitle),
    },
    {
      title: "Confidence Score",
      align: "center",
      key: 'cScore',
      align: 'center',
      render: (record) => {
        if(record.cScore < 50){
        return (
          <div className='redScore'>{record.cScore}</div>
        );
        }else if(record.cScore >= 50 && record.cScore <= 75){
          return (
            <div className='yellowScore'>{record.cScore}</div>
          );
          }
          else if(record.cScore >= 75 && record.cScore <= 100){
            return (
              <div className='greenScore'>{record.cScore}</div>
            );
            }
      },
    },
    {
      title: "Action",
      align: "center",
      render: () => {
        return (
          <Tooltip title="View Detail">
            <EyeOutlined
              className="text-[#333] cursor-pointer"
              onClick={showDModal}
            />
          </Tooltip>
        );
      },
    },
  ];

  const totalcolumns = [
    {
      title: "S.No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      align: "center",
      render: (record) => {
        return (
          <a href={`mailto:${record.email}`} className="text-[#1677ff] hover:text-[white]">
            {record.email}
          </a>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      //sorter: (a, b) => a.phone - b.phone,
    },
    {
      title: "Mobile",
      dataIndex: "phone",
      key: "phone",
      //sorter: (a, b) => a.phone - b.phone,
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      sorter: (a, b) => a.country.localeCompare(b.country),
    },
    {
      title: "Linkedin",
      render: () => {
        return (
          <Tooltip title="Linkedin">
            <LinkedinFilled />
          </Tooltip>
        );
      },
    },
    {
      title: "Facebook",
      render: () => {
        return (
          <Tooltip title="Facebook">
            <FacebookFilled />
          </Tooltip>
        );
      },
    },
    {
      title: "Twitter",
      render: () => {
        return (
          <Tooltip title="Twitter">
            <TwitterSquareFilled />
          </Tooltip>
        );
      },
    },
    {
      title: "Organization",
      align: "center",
      dataIndex: "organization",
      key: "organization"
    },
    {
    title: "Job Title",
    dataIndex: "jobtitle",
    key: "jobtitle",
    sorter: (a, b) => a.jobtitle.localeCompare(b.jobtitle),
    },
    {
      title: "Confidence Score",
      align: "center",
      key: 'cScore',
      align: 'center',
      render: (record) => {
        if(record.cScore < 50){
        return (
          <div className='redScore'>{record.cScore}</div>
        );
        }else if(record.cScore >= 50 && record.cScore <= 75){
          return (
            <div className='yellowScore'>{record.cScore}</div>
          );
          }
          else if(record.cScore >= 75 && record.cScore <= 100){
            return (
              <div className='greenScore'>{record.cScore}</div>
            );
            }
      },
    },
    {
      title: "Action",
      align: "center",
      render: () => {
        return (
          <Tooltip title="View Detail">
            <EyeOutlined
              className="text-[#333] cursor-pointer"
              onClick={showDModal}
            />
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
            title={
              <div className="text-md font-semibold ms-2 lg:ms-4">
                User Detail
              </div>
            }
            open={isDModalOpen}
            onCancel={handleDCancel}
            footer={null}
            className="userDetailModal"
          >
            <Divider />
            <UserDetail />
          </Modal>
        </Content>
        <Footer className="footer bg-[--secondary-color] text-white text-center">
          © Copyright 2023{" "}
          <a
            target="_blank"
            className="text-[--primary-color]"
            href="https://nexgenai.io/"
          >
            NexGenAI.io
          </a>{" "}
          – A NexGenAI Holding Group. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Search;
