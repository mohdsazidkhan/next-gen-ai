import React from "react";
import { Input, Layout,  Table } from "antd";
import TopHeader from "../components/TopHeader";
import Sidebar from "../components/Sidebar";
import {CheckCircleOutlined,EyeOutlined,SearchOutlined,ExportOutlined,ReloadOutlined,} from "@ant-design/icons"
import { Link } from "react-router-dom";

const { Content } = Layout;

const ExportList = () => {

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
          <CheckCircleOutlined className="text-[green] text-lg"/>
        )
      },
    },
    {
      title: 'Action',
      align: 'center',
      render: () => {
        return (
          <Link target="_blank" to="/user-detail"><EyeOutlined className="text-[#3866e6] cursor-pointer text-xl"/></Link>
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
          style={{
            margin: 24,
            minHeight: '100vh',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className="flex items-center rounded px-4 py-2 shadow bg-white">
              <div>
                <div className="text-[--secondary-color] font-medium uppercase">Total</div>
                <div className="text-[--primary-color] font-bold text-2xl">
                  876, 323, 234
                </div>
              </div>
            </div>
            <div className="flex items-center rounded px-4 py-2 shadow bg-white">
              <div>
                <div className="text-[--secondary-color] font-medium uppercase">Total Current</div>
                <div className="text-[--primary-color] font-bold text-2xl">
                  678, 987, 345
                </div>
              </div>
            </div>
            <div className="flex items-center rounded px-4 py-2 shadow bg-white">
              <div>
                <div className="text-[--secondary-color] font-medium uppercase">Saved</div>
                <div className="text-[--primary-color] font-bold text-2xl">
                  567, 786, 974
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-between searchInput">
            <div className="w-full">
              <Input className="w-full" size="large" placeholder="HR Manager" prefix={<SearchOutlined />} />
            </div>
            <div className="bg-white w-20 flex justify-center px-4 gap-4 items-center ms-4 rounded-md">
              <ExportOutlined  className="cursor-pointer"/>
              <ReloadOutlined className="cursor-pointer"/>
            </div>
          </div>
          <Table dataSource={dataSource} columns={columns} className="exportTable"/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default ExportList;
