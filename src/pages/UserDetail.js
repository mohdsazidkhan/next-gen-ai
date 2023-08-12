import { Avatar, Col, Row, Table, Tabs, Tooltip } from "antd";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  UserOutlined,
  LinkedinFilled,
  FacebookFilled,
  TwitterSquareFilled,
  FileOutlined,
  CloseOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function UserDetail() {
  const [activeTab, setActiveTab] = useState("b2c");
  const tabItems = [
    {
      label:
        activeTab === "b2c" ? (
          <>
            <FileOutlined />
            <span>B2C</span>
          </>
        ) : (
          "B2C"
        ),
      key: "b2c",
      children: (
        <div className="userTableMobile">
        <table className="userDetailTable">
        <tbody>
          <tr>
            <td>Tasks No</td>
            <td>#VLZ456</td>
            <td>Tasks No</td>
            <td>#VLZ456</td>
          </tr>
          <tr>
            <td>Tasks Title</td>
            <td>Profile Page Structure</td>
            <td>Tasks Title</td>
            <td>Profile Page Structure</td>
          </tr>
          <tr>
            <td>Project Name</td>
            <td>Admin Dashboard</td>
            <td>Project Name</td>
            <td>Admin Dashboard</td>
          </tr>
          <tr>
            <td>Priority</td>
            <td><span className="px-2 py-1 bg-[#ffefef] text-[#ed0d0d] rounded">High</span></td>
            <td>Priority</td>
            <td><span className="px-2 py-1 bg-[#ffefef] text-[#ed0d0d] rounded">High</span></td>
          </tr>
          <tr>
            <td>Status</td>
            <td><span className="px-2 py-1 bg-[#cedaff] text-[#0441ed] rounded">In Progress</span></td>
            <td>Status</td>
            <td><span className="px-2 py-1 bg-[#cedaff] text-[#0441ed] rounded">In Progress</span></td>
          </tr>
          <tr>
            <td>Due Date</td>
            <td>05, Jan 2022</td>
            <td>Due Date</td>
            <td>05, Jan 2022</td>
          </tr>
        </tbody>
      </table>
      </div>
      ),
    },
    {
      label:
        activeTab === "b2b" ? (
          <>
            <FileOutlined />
            <span>B2B</span>
          </>
        ) : (
          "B2B"
        ),
      key: "b2b",
      children: (
        <div className="userTableMobile">
        <table className="userDetailTable">
        <tbody>
          <tr>
            <td>Tasks No</td>
            <td>#VLZ123</td>
            <td>Tasks No</td>
            <td>#VLZ456</td>
          </tr>
          <tr>
            <td>Tasks Title</td>
            <td>Profile Page Structure</td>
            <td>Tasks Title</td>
            <td>Profile Page Structure</td>
          </tr>
          <tr>
            <td>Project Name</td>
            <td>Admin Dashboard</td>
            <td>Project Name</td>
            <td>Admin Dashboard</td>
          </tr>
          <tr>
            <td>Priority</td>
            <td><span className="px-2 py-1 bg-[#ffefef] text-[#ed0d0d] rounded">High</span></td>
            <td>Priority</td>
            <td><span className="px-2 py-1 bg-[#ffefef] text-[#ed0d0d] rounded">High</span></td>
          </tr>
          <tr>
            <td>Status</td>
            <td><span className="px-2 py-1 bg-[#cedaff] text-[#0441ed] rounded">In Progress</span></td>
            <td>Status</td>
            <td><span className="px-2 py-1 bg-[#cedaff] text-[#0441ed] rounded">In Progress</span></td>
          </tr>
          <tr>
            <td>Due Date</td>
            <td>05, Jan 2022</td>
            <td>Due Date</td>
            <td>05, Jan 2022</td>
          </tr>
        </tbody>
      </table>
      </div>
      ),
    },
  ];
  const handleTabs = (active) => {
    setActiveTab(active);
  };
  return (
    <div className="userDetail">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={4}
          xl={4}
          className="bg-[--secondary-color] py-16"
        ></Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={20}
          xl={20}
          className="bg-white flex flex-col lg:flex-row items-center justify-start py-16"
        >
          <div className="flex mt-[-150px] lg:mt-[0] lg:ms-[-100px]">
            <Avatar
              icon={<UserOutlined />}
              size={200}
              className="bg-[--primary-color]"
            />
          </div>
          <div className="ms-0 lg:ms-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="uppercase font-semibold text-3xl text-[--secondary-color]">
              Margaret Williams
            </div>
            <div className="uppercase font-semibold text-2xl">HR Manager</div>
            <div className="flex justify-center items-center">
              <span className="uppercase font-semibold text-2xl text-[--secondary-color] pe-1">
                (978) 978-7675
              </span>{" "}
              <CloseOutlined className="text-[#ff1313]" />
            </div>
            <div className="flex gap-3 mt-1">
              <LinkedinFilled className="cursor-pointer text-2xl text-[crimson]" />
              <FacebookFilled className="cursor-pointer text-2xl text-[forestgreen]" />
              <TwitterSquareFilled className="cursor-pointer text-2xl" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="m-4">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <p className="pe-0 lg:pe-8 pb-4 lg:pb-0 text-[--secondary-color]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="bg-[--primary-color] flex items-center justify-start"
        >
          <div className="ms-0 lg:ms-8 p-4 lg:p-0">
            <ul className="userList">
              <li className="text-white mb-4 flex">
                <div className="w-auto lg:w-32">Organization</div> :{" "}
                <div className="ms-2 lg:ms-6">
                  Post Consumer Board (Formaly MOM Board)
                </div>
              </li>
              <li className="text-white mb-4 flex">
                <div className="w-auto lg:w-32">Email</div> :{" "}
                <div className="ms-2 lg:ms-6 flex items-center">
                  <span className="pe-1">margratwilliams@gmail.com</span>{" "}
                  <span className="verifyEmail">
                    <CheckCircleOutlined className="text-[#11c73f]" />
                  </span>
                </div>
              </li>
              <li className="text-white mb-4 flex">
                <div className="w-auto lg:w-32">Language</div> :{" "}
                <div className="ms-2 lg:ms-6">English</div>
              </li>
              <li className="text-white flex">
                <div className="w-auto lg:w-32">Location</div> :{" "}
                <div className="ms-2 lg:ms-6">Newyork, United States</div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="bg-[--secondary-color] m-4 p-4 lg:p-10">
        <div className="text-xl font-bold jobHead relative text-[--primary-color]">
          Job Functions & Efficiency
        </div>
        <div className="grid gird-col-1 lg:grid-cols-3 gap-y-4 gap-x-16 mt-10">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Art and Design</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Engineering</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Consulting</div>
            <div className="w-12 h-12">
              <CircularProgressbar value={99} text={`${99}%`} styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Art and Design</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Engineering</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Consulting</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Art and Design</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Engineering</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Consulting</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Art and Design</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Engineering</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Consulting</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Art and Design</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Engineering</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Consulting</div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={33}
                text={`${33}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Art and Design</div>
            <div className="w-12 h-12">
              <CircularProgressbar value={20} text={`${20}%`} styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Engineering</div>
            <div className="w-12 h-12">
              <CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-white">Consulting</div>
            <div className="w-12 h-12">
              <CircularProgressbar value={100} text={`${100}%`} styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}/>
            </div>
          </div>
        </div>
      </div>
      <div className="personalDetail m-4">
        <Tabs
          className="fileTabs"
          defaultActiveKey="b2c"
          type="card"
          size={"medium"}
          items={tabItems}
          onChange={handleTabs}
        />
      </div>
    </div>
  );
}
export default UserDetail;
