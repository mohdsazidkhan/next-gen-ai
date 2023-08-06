import React, { useState } from "react";
import {
  UploadOutlined,
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu } from "antd";
import {useNavigate} from "react-router-dom";
const { Sider } = Layout;

const Sidebar = () => {

  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(localStorage.getItem('selectedKeys') || []);
  const [openedKeys, setOpenKeys] = useState([]);

  const handleCollapsed = () =>{
    setCollapsed(!collapsed)
  }

  const handleClick = (e)=>{
    setSelectedKeys(e.key);
    localStorage.setItem('selectedKeys', [e.key])
    if(e.key === 'dashboard'){
      navigate(`/dashboard`)
    }else if(e.key === 'profile'){
      navigate(`/profile`)
    }else if(e.key === 'exportlist'){
      navigate(`/export-list`)
    }else if(e.key === 'logout'){
      navigate(`/`)
    }
    
  }
  const onOpenChange = (e) => {
    setOpenKeys(e.key);
    if(e.key === 'dashboard'){
      navigate(`/dashboard`)
    }else if(e.key === 'profile'){
      navigate(`/profile`)
    }else if(e.key === 'exportlist'){
      navigate(`/export-list`)
    }else if(e.key === 'logout'){
      navigate(`/login`)
    }
  }
  //console.log(selectedKeys)
  return (
    <div className="relative">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleCollapsed}
        className={`fixed text-base w-16 h-16 z-10 flex justify-center items-center hover:rounded-none ${!collapsed ? 'left-[200px]':'left-[80px]'}`} 
      />
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-[#212733] h-full"
      >
        <div className="flex items-center justify-center bg-[#303644] py-4 flex-col">
        <div>
        <Avatar className="flex items-center justify-center" size={48} icon={<UserOutlined />} />
        </div>
        {!collapsed &&
          <>
            <div className="text-white font-semibold">
              Jiyahul Haq
            </div>
            <div className="text-[--primary-color]">
              jiyahulhaq@gamil.com
            </div>
          </>
        }
        </div>
        <Menu
          className="pt-4 bg-[#212733]"
          theme="dark"
          mode="inline"
          onClick={handleClick}
          selectedKeys={selectedKeys}
          openKeys={openedKeys}
          onOpenChange={onOpenChange}
          items={[
            {
              key: "dashboard",
              icon: <HomeOutlined />,
              label: "Dashboard",
              url: '/',
            },
            {
              key: "profile",
              icon: <UserOutlined />,
              label: "Profile",
              url: '/profile',
            },
            {
              key: "exportlist",
              icon: <UploadOutlined />,
              label: "Export List",
              url: '/',
            },
            {
              key: "logout",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
    </div>
  );
};
export default Sidebar;
