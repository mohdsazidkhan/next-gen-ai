import React from "react";
import { Col, Divider, Layout, Row } from "antd";
import TopHeader from "../components/TopHeader";
import Sidebar from "../components/Sidebar";
import {
  BarChartOutlined,
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Chart as ChartJS, ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, 
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
ChartJS.register(ArcElement, CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const { Content } = Layout;
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const barData = {
  labels,
  datasets: [
    {
      label: 'Total Data',
      data: [2,6,3,7,5,8,7,9,9,0],
      backgroundColor: 'rgba(255, 99, 13, 0.5)',
    },
    {
      label: 'Phone No.',
      data: [0,1,3,4,5,6,7,8,9,0],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Email',
      data: [0,1,3,4,5,6,7,8,9,0],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const Dashboard = () => {

  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Layout>
        <Sidebar />
        <Layout>
        <TopHeader />
        <Content
          className=" bg-white m-2 lg:m-6 p-2 lg:p-6 min-h-screen mainContent"
        >
          <div className="font-bold text-xl text-[--secondary-color]">
            Dashboard
          </div>
          <div className="text-gray-500 font-semibold">
            Welcome to Next Gen AI
          </div>
          <Divider/>
          <div className="grid grid-col-1 lg:grid-cols-4 gap-4 mt-5">
            <div className="flex justify-between items-center rounded px-4 py-2 shadow">
              <div className="bg-[#dce1ff] w-10 h-10 rounded flex justify-center items-center">
                <BarChartOutlined className="text-[rgb(42,61,145)] text-2xl leading-none" />
              </div>
              <div>
                <div className="text-gray-500 font-medium">Total Records</div>
                <div className="text-[--secondary-color] font-bold text-2xl">
                  769.95M
                </div>
              </div>
              <div className="text-gray-500 font-normal text-base">100%</div>
            </div>
            <div className="flex justify-between items-center rounded px-4 py-2 shadow">
              <div className="bg-[#dcffe2] w-10 h-10 rounded flex justify-center items-center">
                <MailOutlined className="text-[rgb(42,145,64)] text-2xl leading-none" />
              </div>
              <div>
                <div className="text-gray-500 font-medium">Total Email</div>
                <div className="text-[--secondary-color] font-bold text-2xl">
                  289.49M
                </div>
              </div>
              <div className="text-gray-500 font-normal text-base">37%</div>
            </div>
            <div className="flex justify-between items-center rounded px-4 py-2 shadow">
              <div className="bg-[#f4dcff] w-10 h-10 rounded flex justify-center items-center">
                <PhoneOutlined className="text-[rgb(133,42,145)] text-2xl leading-none" />
              </div>
              <div>
                <div className="text-gray-500 font-medium">Total Phone No</div>
                <div className="text-[--secondary-color] font-bold text-2xl">
                  150.71M
                </div>
              </div>
              <div className="text-gray-500 font-normal text-base">19%</div>
            </div>
            <div className="flex justify-between items-center rounded px-4 py-2 shadow">
              <div className="bg-[#ffdcdc] w-10 h-10 rounded flex justify-center items-center">
                <InstagramOutlined className="text-[rgb(255,99,99)] text-2xl leading-none" />
              </div>
              <div>
                <div className="text-gray-500 font-medium">
                  Linkedin Profile
                </div>
                <div className="text-[--secondary-color] font-bold text-2xl">
                  527.18M
                </div>
              </div>
              <div className="text-gray-500 font-normal text-base">68%</div>
            </div>
          </div>
          <Divider/>
          <Row
            className="mt-8"
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
              <div className="shadow p-4">
                <div className="font-bold text-xl text-gray-700">Top Five Source</div>
                <Divider/>
                <Pie data={pieData} />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={14} xl={14}>
            <div className="shadow p-4">
              <div className="font-bold text-xl text-gray-700">Valid Email & Phone No.</div>
              <Divider/>
              <Bar options={options} data={barData} />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
