import React, { useState } from "react";
import {
  Avatar,
  Divider,
  Dropdown,
  Layout,
  Modal,
  Space,
  Tooltip,
  theme,
} from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UploadOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
const { Header } = Layout;

const TopHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        className="flex justify-between items-center shadow"
      >
        <div className="text-[#333] totalHeader font-semibold">
          Total: 654,678,234
        </div>
        <div className="userName font-semibold uppercase">Jiyahul Haq</div>
        <div className="flex gap-3 lg:gap-4 items-center rightHeader">
          <div>
            <Tooltip title="Dashboard">
              <Link to="/dashboard" className="cursor-pointer">
                <HomeOutlined />
              </Link>
            </Tooltip>
          </div>
          <div className="mt-0 lg:mt-1">
            <Tooltip title="Search">
              <Link to="/search" className="cursor-pointer">
                <SearchOutlined />
              </Link>
            </Tooltip>
          </div>
          <div>
            <Tooltip title="Export Lists">
              <Link to="/export-lists" className="cursor-pointer">
                <UploadOutlined />
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
          <div>
            <Tooltip title="Logout">
              <Link to="/" className="cursor-pointer">
                <LogoutOutlined />
              </Link>
            </Tooltip>
          </div>
          <div className="cursor-pointer">
            <Tooltip title="Profile">
              <Avatar size={32} src="/profile.png" onClick={showModal} />
            </Tooltip>
          </div>
        </div>
      </Header>
      <Modal
        title={<div className="text-md font-semibold">Profile</div>}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="profileModal"
      >
        <Divider />
        <Profile />
      </Modal>
    </>
  );
};
export default TopHeader;
