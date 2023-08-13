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
            <Link to="https://linkedin.com" className="socialTableIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#0288d1"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
                />
              </svg>
              </Link>
          </Tooltip>
        );
      },
    },
    {
      title: "Facebook",
      render: () => {
        return (
          <Tooltip title="Facebook">
            <Link to="https://facebook.com" className="socialTableIcon">              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                />
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                />
              </svg>
              </Link>
          </Tooltip>
        );
      },
    },
    {
      title: "Twitter",
      render: () => {
        return (
          <Tooltip title="Twitter">
            <Link to="https://twitter.com" className="socialTableIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#03a9f4"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
                />
              </svg>
              </Link>
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
            <Link to="https://linkedin.com" className="socialTableIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#0288d1"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
                />
              </svg>
              </Link>
          </Tooltip>
        );
      },
    },
    {
      title: "Facebook",
      render: () => {
        return (
          <Tooltip title="Facebook">
            <Link to="https://facebook.com" className="socialTableIcon">              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                />
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                />
              </svg>
              </Link>
          </Tooltip>
        );
      },
    },
    {
      title: "Twitter",
      render: () => {
        return (
          <Tooltip title="Twitter">
            <Link to="https://twitter.com" className="socialTableIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#03a9f4"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
                />
              </svg>
              </Link>
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
