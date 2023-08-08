import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Image, Layout, Tooltip } from "antd";
import {Link} from "react-router-dom";
import Filter from "../components/Filter";
const { Sider } = Layout;

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () =>{
    setCollapsed(!collapsed)
  }
  const handleCLoseMenu = () =>{
    setCollapsed(false)
  }

  return (
    <div className="relative">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleCollapsed}
        className={`fixed text-base w-16 h-16 z-10 justify-center items-center hover:rounded-none menutoggle`} 
      />
      <div className="overlay" style={{transform: collapsed ? 'translateX(0)' : ''}} onClick={handleCLoseMenu}></div>
      <Sider
        style={{position: 'fixed',transform: collapsed ? 'translateX(0)' : ''}}
        className="bg-[#212733] left-0 bottom-0 top-0 h-screen z-10"
      >
        <div className="flex items-center justify-center bg-[#303644] py-4 flex-col">
          <Link to="/dashboard"><Tooltip title="Dashboard"><Image className="flex items-center justify-center" src='/logo-m.png' width={52} preview={false}/></Tooltip></Link>
        </div>
        <Filter/>
      </Sider>
    </div>
  );
};
export default Sidebar;
