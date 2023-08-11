import { Avatar, Col, Row, Tabs } from "antd";
import {
  UserOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FileOutlined
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
        )
        ,
      key: "b2c",
      children: <Row>
      <Col sm={24} md={24} lg={24} xl={6} xxl={6}>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Hq Location State :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Num Clicks :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Job Start Date :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Retail Location Count :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Personal Seniority :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation Date Time :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Hq Location City with State Or Country:
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Replied :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Location Country :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Extrapolated Email Confidence :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Email Status Cd :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Phone Numbers :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Sanitized Organization Name Unanalyzed :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validated :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Current Technologies:
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation History :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Revenue in Thousands in Int :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Current Employees :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Languages :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Domain :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Open :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Founded Year :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Clicked :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validated Status :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Relevant Keywords :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Linkedin Followers :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Spam Blocked :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation All :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Location Hq Postl Code :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Auto Responder :
      </div>
    
      </Col>
      <Col sm={24} md={24} lg={24} xl={6} xxl={6}>
      <div className="my-2 ms-2 lg:ms-0">Minnesota</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Nov, 1 2017</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Manager</div>
      <div className="my-2 ms-2 lg:ms-0">
        2023-02-20T07:12:08.185896
      </div>
      <div className="my-2 ms-2 lg:ms-0">
        Lakeville, Minnesota
      </div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">United States</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Verified</div>
      <div className="my-2 ms-2 lg:ms-0">1) Sanitized Number: +91234234234234, Status : No Status, Type : other</div>
      <div className="my-2 ms-2 lg:ms-0">post consumer brands formely mom brands</div>


      <div className="my-2 ms-2 lg:ms-0">true</div>
      <div className="my-2 ms-2 lg:ms-0">Corporate Domains, Office 365, Google Analytics</div>
      <div className="my-2 ms-2 lg:ms-0">Email Address: fasfsdfdsa@gmail.com, Email Validated: true, Reason: Safe to Send</div>
      <div className="my-2 ms-2 lg:ms-0">30000USD</div>
      <div className="my-2 ms-2 lg:ms-0">841</div>
      <div className="my-2 ms-2 lg:ms-0">1</div>
      <div className="my-2 ms-2 lg:ms-0">mombrands.com</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">2012</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">Verified</div>
      <div className="my-2 ms-2 lg:ms-0">1 - consumer goods, 2 - consumer</div>
      <div className="my-2 ms-2 lg:ms-0">7327</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">campaign reconciliation</div>
      <div className="my-2 ms-2 lg:ms-0">55044</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      </Col>
      <Col sm={24} md={24} lg={24} xl={6} xxl={6}>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Hq Location State :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Num Clicks :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Job Start Date :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Retail Location Count :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Personal Seniority :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation Date Time :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Hq Location City with State Or Country:
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Replied :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Location Country :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Extrapolated Email Confidence :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Email Status Cd :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Phone Numbers :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Sanitized Organization Name Unanalyzed :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validated :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Current Technologies:
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation History :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Revenue in Thousands in Int :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Current Employees :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Languages :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Domain :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Open :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Founded Year :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Clicked :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validated Status :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Relevant Keywords :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Linkedin Followers :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Spam Blocked :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation All :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Location Hq Postl Code :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Auto Responder :
      </div>
    
      </Col>
      <Col sm={24} md={24} lg={24} xl={6} xxl={6}>
      <div className="my-2 ms-2 lg:ms-0">Minnesota</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Nov, 1 2017</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Manager</div>
      <div className="my-2 ms-2 lg:ms-0">
        2023-02-20T07:12:08.185896
      </div>
      <div className="my-2 ms-2 lg:ms-0">
        Lakeville, Minnesota
      </div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">United States</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Verified</div>
      <div className="my-2 ms-2 lg:ms-0">1) Sanitized Number: +91234234234234, Status : No Status, Type : other</div>
      <div className="my-2 ms-2 lg:ms-0">post consumer brands formely mom brands</div>


      <div className="my-2 ms-2 lg:ms-0">true</div>
      <div className="my-2 ms-2 lg:ms-0">Corporate Domains, Office 365, Google Analytics</div>
      <div className="my-2 ms-2 lg:ms-0">Email Address: fasfsdfdsa@gmail.com, Email Validated: true, Reason: Safe to Send</div>
      <div className="my-2 ms-2 lg:ms-0">30000USD</div>
      <div className="my-2 ms-2 lg:ms-0">841</div>
      <div className="my-2 ms-2 lg:ms-0">1</div>
      <div className="my-2 ms-2 lg:ms-0">mombrands.com</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">2012</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">Verified</div>
      <div className="my-2 ms-2 lg:ms-0">1 - consumer goods, 2 - consumer</div>
      <div className="my-2 ms-2 lg:ms-0">7327</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">campaign reconciliation</div>
      <div className="my-2 ms-2 lg:ms-0">55044</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      </Col>
      </Row>,
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
      children: <Row>
      <Col sm={24} md={24} lg={24} xl={6} xxl={6}>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Num Clicks :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Job Start Date :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Retail Location Count :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Personal Seniority :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation Date Time :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Hq Location City with State Or Country:
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Replied :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Location Country :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Extrapolated Email Confidence :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Email Status Cd :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Phone Numbers :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Sanitized Organization Name Unanalyzed :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validated :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Current Technologies:
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation History :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Revenue in Thousands in Int :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Current Employees :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Languages :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Domain :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Open :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Founded Year :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Clicked :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validated Status :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Relevant Keywords :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Linkedin Followers :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Spam Blocked :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation All :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Location Hq Postl Code :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Auto Responder :
      </div>
    
      </Col>
      <Col sm={24} md={24} lg={24} xl={6} xxl={6}>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Nov, 1 2017</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Manager</div>
      <div className="my-2 ms-2 lg:ms-0">
        2023-02-20T07:12:08.185896
      </div>
      <div className="my-2 ms-2 lg:ms-0">
        Lakeville, Minnesota
      </div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">United States</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Verified</div>
      <div className="my-2 ms-2 lg:ms-0">1) Sanitized Number: +91234234234234, Status : No Status, Type : other</div>
      <div className="my-2 ms-2 lg:ms-0">post consumer brands formely mom brands</div>


      <div className="my-2 ms-2 lg:ms-0">true</div>
      <div className="my-2 ms-2 lg:ms-0">Corporate Domains, Office 365, Google Analytics</div>
      <div className="my-2 ms-2 lg:ms-0">Email Address: fasfsdfdsa@gmail.com, Email Validated: true, Reason: Safe to Send</div>
      <div className="my-2 ms-2 lg:ms-0">30000USD</div>
      <div className="my-2 ms-2 lg:ms-0">841</div>
      <div className="my-2 ms-2 lg:ms-0">1</div>
      <div className="my-2 ms-2 lg:ms-0">mombrands.com</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">2012</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">Verified</div>
      <div className="my-2 ms-2 lg:ms-0">1 - consumer goods, 2 - consumer</div>
      <div className="my-2 ms-2 lg:ms-0">7327</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">campaign reconciliation</div>
      <div className="my-2 ms-2 lg:ms-0">55044</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      </Col>
      <Col sm={24} md={24} lg={24} xl={6} xxl={6}>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Num Clicks :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Job Start Date :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Retail Location Count :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Personal Seniority :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation Date Time :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Hq Location City with State Or Country:
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Replied :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Location Country :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Extrapolated Email Confidence :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Person Email Status Cd :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Phone Numbers :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Sanitized Organization Name Unanalyzed :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validated :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Current Technologies:
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation History :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Revenue in Thousands in Int :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Current Employees :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Languages :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Domain :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Open :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Founded Year :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Clicked :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validated Status :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Relevant Keywords :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Num Linkedin Followers :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contacy Email Spam Blocked :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Email Validation All :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Organization Location Hq Postl Code :
      </div>
      <div className="my-2 me-2 lg:me-6 ms-2 lg:ms-6 text-[--primary-color]">
        Contact Email Auto Responder :
      </div>
    
      </Col>
      <Col sm={24} md={24} lg={24} xl={6} xxl={6}>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Nov, 1 2017</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Manager</div>
      <div className="my-2 ms-2 lg:ms-0">
        2023-02-20T07:12:08.185896
      </div>
      <div className="my-2 ms-2 lg:ms-0">
        Lakeville, Minnesota
      </div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">United States</div>
      <div className="my-2 ms-2 lg:ms-0">0</div>
      <div className="my-2 ms-2 lg:ms-0">Verified</div>
      <div className="my-2 ms-2 lg:ms-0">1) Sanitized Number: +91234234234234, Status : No Status, Type : other</div>
      <div className="my-2 ms-2 lg:ms-0">post consumer brands formely mom brands</div>


      <div className="my-2 ms-2 lg:ms-0">true</div>
      <div className="my-2 ms-2 lg:ms-0">Corporate Domains, Office 365, Google Analytics</div>
      <div className="my-2 ms-2 lg:ms-0">Email Address: fasfsdfdsa@gmail.com, Email Validated: true, Reason: Safe to Send</div>
      <div className="my-2 ms-2 lg:ms-0">30000USD</div>
      <div className="my-2 ms-2 lg:ms-0">841</div>
      <div className="my-2 ms-2 lg:ms-0">1</div>
      <div className="my-2 ms-2 lg:ms-0">mombrands.com</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">2012</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">Verified</div>
      <div className="my-2 ms-2 lg:ms-0">1 - consumer goods, 2 - consumer</div>
      <div className="my-2 ms-2 lg:ms-0">7327</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      <div className="my-2 ms-2 lg:ms-0">campaign reconciliation</div>
      <div className="my-2 ms-2 lg:ms-0">55044</div>
      <div className="my-2 ms-2 lg:ms-0">false</div>
      </Col>
      </Row>,
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
            <div className="uppercase font-semibold text-2xl text-[--primary-color]">
              HR Manager
            </div>
            <div className="uppercase font-semibold text-2xl text-[--secondary-color]">
              (978) 978-7675
            </div>
            <div className="flex gap-3 mt-1">
              <FacebookOutlined className="text-[--secondary-color] cursor-pointer text-lg" />
              <LinkedinOutlined className="text-[--secondary-color] cursor-pointer text-lg" />
              <InstagramOutlined className="text-[--secondary-color] cursor-pointer text-lg" />
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
                <div className="ms-2 lg:ms-6">margratwilliams@gmail.com</div>
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
        <div className="text-xl font-bold text-[--primary-color] jobHead relative">
          Job Functions & Efficiency
        </div>
        <div className="grid gird-col-1 lg:grid-cols-3 gap-y-4 gap-x-16 mt-10">
          <div className="flex justify-between">
            <div className="font-semibold text-white">
              Art and Design
            </div>
            <div className="font-semibold gradientColor">3%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Engineering</div>
            <div className="font-semibold gradientColor">22%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Consulting</div>
            <div className="font-semibold gradientColor">7%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">
              Art and Design
            </div>
            <div className="font-semibold gradientColor">3%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Engineering</div>
            <div className="font-semibold gradientColor">22%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Consulting</div>
            <div className="font-semibold gradientColor">7%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">
              Art and Design
            </div>
            <div className="font-semibold gradientColor">3%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Engineering</div>
            <div className="font-semibold gradientColor">22%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Consulting</div>
            <div className="font-semibold gradientColor">7%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">
              Art and Design
            </div>
            <div className="font-semibold gradientColor">3%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Engineering</div>
            <div className="font-semibold gradientColor">22%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Consulting</div>
            <div className="font-semibold gradientColor">7%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">
              Art and Design
            </div>
            <div className="font-semibold gradientColor">3%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Engineering</div>
            <div className="font-semibold gradientColor">22%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Consulting</div>
            <div className="font-semibold gradientColor">7%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">
              Art and Design
            </div>
            <div className="font-semibold gradientColor">3%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Engineering</div>
            <div className="font-semibold gradientColor">22%</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-white">Consulting</div>
            <div className="font-semibold gradientColor">7%</div>
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
