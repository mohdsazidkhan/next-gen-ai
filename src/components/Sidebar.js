import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Image, Layout, Tabs, Tooltip } from "antd";
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

  const tabItems = [
    {
      label: `B2C`,
      key: "b2c",
      children: (
        <Filter title={"B2C"}/>
      ),
    },
    {
      label: `B2B`,
      key: "b2b",
      children: (
        <Filter title={"B2B"}/>
      ),
    },
  ];

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
        <div className="flex items-center justify-center py-4 flex-col">
          <Link to="/dashboard"><Tooltip title="Dashboard"><Image className="flex items-center justify-center" src='/logo-m.png' width={52} preview={false}/></Tooltip></Link>
          <div className="logoText text-center">
            <div className="text-white font-bold text-2xl">NextGen AI</div>
            <div className="text-white font-medium text-base uppercase">Solutions Group</div>
          </div>
        </div>
        <Tabs
            className="filterTabs"
            defaultActiveKey="b2c"
            type="card"
            size={"medium"}
            items={tabItems}
          />
        
      </Sider>
    </div>
  );
};
export default Sidebar;
