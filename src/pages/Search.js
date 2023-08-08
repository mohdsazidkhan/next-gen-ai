import React from "react";
import { Input, Layout,  Table, Tooltip } from "antd";
import TopHeader from "../components/TopHeader";
import Sidebar from "../components/Sidebar";
import {CheckCircleOutlined,EyeOutlined,SearchOutlined,ExportOutlined,ReloadOutlined,} from "@ant-design/icons"
import { Link } from "react-router-dom";

const { Content } = Layout;

const Search = () => {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',
    },
    {
      key: '2',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',      
    },
    {
      key: '3',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',
    },
    {
      key: '4',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',
    },
    {
      key: '5',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',
    },
    {
      key: '6',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',
    },
    {
      key: '7',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022', 
    },
    {
      key: '8',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',
    },
    {
      key: '9',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',
    },
    {
      key: '10',
      name: 'John',
      area: '10 Downing Street',
      phone: 9876543210,
      email: 'jhonedoe@gmail.com',
      jobtitle: 'Front End Developer',
      lastverified: '15 Jan 2022',
    },
  ];
  
  const columns = [
    {
      title: 'No.',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Job Title',
      dataIndex: 'jobtitle',
      key: 'jobtitle',
    },
    {
      title: 'Last Verified',
      dataIndex: 'lastverified',
      key: 'lastverified',
    },
    {
      title: 'Verified',
      align: 'center',
      render: () => {
        return (
          <Tooltip title="Verified"><CheckCircleOutlined className="text-[#333] text-lg"/></Tooltip>
        )
      },
    },
    {
      title: 'Action',
      align: 'center',
      render: () => {
        return (
          <Link target="_blank" to="/user-detail"><Tooltip title="View Detail"><EyeOutlined className="text-[#333] cursor-pointer text-xl"/></Tooltip></Link>
        )
      },
    },
  ];
  return (
    <Layout>
        <Sidebar />
        <Layout>
        <TopHeader />
        <Content
          className="mainContent mt-6 exportContent"
        >
          <div className="mb-4 flex justify-between searchInput">
            <div className="w-full">
              <Input className="w-full" size="large" placeholder="HR Manager" suffix={
              <Tooltip title="Search"><SearchOutlined className="searchIcon"/></Tooltip>
              } />
            </div>
            <div className="bg-white w-20 flex justify-center px-4 gap-4 items-center ms-4 shadow">
              <Tooltip title="Export"><ExportOutlined  className="cursor-pointer"/></Tooltip>
              <Tooltip title="Refresh"><ReloadOutlined className="cursor-pointer"/></Tooltip>
            </div>
          </div>
          <Table dataSource={dataSource} columns={columns} className="exportTable"/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Search;
