import React from "react";
import { Avatar, Dropdown, Layout, Space, Tooltip, theme } from "antd";
import { SearchOutlined, BellOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

const TopHeader = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: "1st menu item",
      key: "0",
    },
    {
      label: "2nd menu item",
      key: "1",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  const uitems = [
    {
      label: <div className="font-bold">Mohd Sazid Khan</div>,
      key: "0",
    },
    {
      type: 'divider',
    },
    {
      label: <Link to="/profile">Profile</Link>,
      key: "1",
    },
    {
      label: <Link to="/">Logout</Link>,
      key: "2",
    },
  ];
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          background: colorBgContainer,
        }}
        className="flex justify-end items-center ps-[50px] shadow"
      >
        <div className="flex gap-4 items-center">
          <div>
          <Tooltip title="Export Lists">
            <Link to="/export-lists" className="cursor-pointer">
              <UploadOutlined />
            </Link>
          </Tooltip>
          </div>
          <div className="mt-0 lg:mt-1">
          <Tooltip title="Search">
            <Link to="/search" className="cursor-pointer">
              <SearchOutlined/>
            </Link>
          </Tooltip>
          </div>
          <div className="cursor-pointer">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Space>
                <Tooltip title="Notifications">
                  <BellOutlined />
                </Tooltip>
              </Space>
            </Dropdown>
          </div>
          <div className="cursor-pointer">
            <Dropdown
              menu={{
                items: uitems,
              }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Space>
                <Tooltip title="User">
                  <Avatar size={32} />
                </Tooltip>
              </Space>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  );
};
export default TopHeader;
