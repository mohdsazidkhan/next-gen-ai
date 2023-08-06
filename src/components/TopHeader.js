import React, { useState } from 'react';
import { Dropdown, Layout, Space, theme } from 'antd';
import {
  SearchOutlined,
  BellOutlined
} from '@ant-design/icons';
import Filter from '../components/Filter';
const { Header} = Layout;

const TopHeader = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleFilter = ()=>{
    setOpenFilter(!openFilter)
  }
  
  const items = [
    {
      label: "1st menu item",
      key: '0',
    },
    {
      label: "2nd menu item",
      key: '1',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <>
    <Filter open={openFilter}/>
    <Header
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      background: colorBgContainer,
    }}
    className='flex justify-between items-center ps-[50px] shadow'
    >
      <div className='capitalize font-semibold'>
        {window.location.pathname.replace("/", "")}   
      </div>
      <div className='flex gap-4 items-center'>
        <div className='cursor-pointer' onClick={handleFilter}>
        <SearchOutlined/>
        </div>
        <div className='cursor-pointer'>
        <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
        >
            <Space>
              <BellOutlined />
            </Space>
        </Dropdown>
        </div>
      </div>
    </Header>
    </>
  );
};
export default TopHeader;