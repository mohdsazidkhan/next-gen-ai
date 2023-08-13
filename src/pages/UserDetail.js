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
import { Link } from "react-router-dom";

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
                <td>
                  <span className="px-2 py-1 bg-[#ffefef] text-[#ed0d0d] rounded">
                    High
                  </span>
                </td>
                <td>Priority</td>
                <td>
                  <span className="px-2 py-1 bg-[#ffefef] text-[#ed0d0d] rounded">
                    High
                  </span>
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <span className="px-2 py-1 bg-[#cedaff] text-[#0441ed] rounded">
                    In Progress
                  </span>
                </td>
                <td>Status</td>
                <td>
                  <span className="px-2 py-1 bg-[#cedaff] text-[#0441ed] rounded">
                    In Progress
                  </span>
                </td>
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
                <td>
                  <span className="px-2 py-1 bg-[#ffefef] text-[#ed0d0d] rounded">
                    High
                  </span>
                </td>
                <td>Priority</td>
                <td>
                  <span className="px-2 py-1 bg-[#ffefef] text-[#ed0d0d] rounded">
                    High
                  </span>
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <span className="px-2 py-1 bg-[#cedaff] text-[#0441ed] rounded">
                    In Progress
                  </span>
                </td>
                <td>Status</td>
                <td>
                  <span className="px-2 py-1 bg-[#cedaff] text-[#0441ed] rounded">
                    In Progress
                  </span>
                </td>
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
              <Link to="https://linkedin.com" className="userDSocial">
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
              <Link to="https://facebook.com" className="userDSocial">              
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
              <Link to="https://twitter.com" className="userDSocial">
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
              <CircularProgressbar
                value={99}
                text={`${99}%`}
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
                value={20}
                text={`${20}%`}
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
                value={90}
                text={`${90}%`}
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
                value={100}
                text={`${100}%`}
                styles={buildStyles({
                  textColor: "#35c1bd",
                  pathColor: "#35c1bd",
                  trailColor: "#fff",
                })}
              />
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
