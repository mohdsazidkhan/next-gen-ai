import React from "react";
import { Button, Card, Input, Layout, Table, Tooltip } from "antd";
import TopHeader from "../components/TopHeader";
import Sidebar from "../components/Sidebar";
import {
  CheckCircleOutlined,
  EyeOutlined,
  SearchOutlined,
  ExportOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Content } = Layout;

const ExportLists = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <TopHeader />
        <Content className="mainContent mt-6">
          <div className="exportLists">
            <Card title={<div className="text-[--secondary-color] text-base font-semibold">Hospitals & Health Care</div>} bordered={false} className="mb-4">
                <div className="text-[--secondary-color] font-semibold mb-2">Advance Searches</div>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Industries: </span><span className="italic font-medium text-slate-500">Hospital $ Health Care</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Email Valid Only: </span><span className="italic font-medium text-slate-500">True</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Total Data: </span><span className="font-medium text-slate-500">21056</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Exported Data: </span><span className="font-medium text-slate-500">2000</span></div>
                </div>
                <div className="mt-6 flex flex-col lg:flex-row justify-start gap-4">
                    <Button type="primary" className="bg-[--primary-color]">
                      View Export Details
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Export Next Batch (2001-2004)
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Import Data to EOS (0-2000)
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Upload for Verification
                    </Button>
                </div>
            </Card>
            <Card title={<div className="text-[--secondary-color] text-base font-semibold">Hospitals & Health Care</div>} bordered={false} className="mb-4">
                <div className="text-[--secondary-color] font-semibold mb-2">Advance Searches</div>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Industries: </span><span className="italic font-medium text-slate-500">Hospital $ Health Care</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Email Valid Only: </span><span className="italic font-medium text-slate-500">True</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Total Data: </span><span className="font-medium text-slate-500">21056</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Exported Data: </span><span className="font-medium text-slate-500">2000</span></div>
                </div>
                <div className="mt-6 flex-col lg:flex-row flex justify-start gap-4">
                    <Button type="primary" className="bg-[--primary-color]">
                      View Export Details
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Export Next Batch (2001-2004)
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Import Data to EOS (0-2000)
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Upload for Verification
                    </Button>
                </div>
            </Card>
            <Card title={<div className="text-[--secondary-color] text-base font-semibold">Hospitals & Health Care</div>} bordered={false} className="mb-4">
                <div className="text-[--secondary-color] font-semibold mb-2">Advance Searches</div>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Industries: </span><span className="italic font-medium text-slate-500">Hospital $ Health Care</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Email Valid Only: </span><span className="italic font-medium text-slate-500">True</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Total Data: </span><span className="font-medium text-slate-500">21056</span></div>
                  <div><span className="text-[--secondary-color] mr-2 font-medium">Exported Data: </span><span className="font-medium text-slate-500">2000</span></div>
                </div>
                <div className="mt-6 flex-col lg:flex-row flex justify-start gap-4">
                    <Button type="primary" className="bg-[--primary-color]">
                      View Export Details
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Export Next Batch (2001-2004)
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Import Data to EOS (0-2000)
                    </Button>
                    <Button type="primary" className="bg-[--primary-color]">
                      Upload for Verification
                    </Button>
                </div>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default ExportLists;
