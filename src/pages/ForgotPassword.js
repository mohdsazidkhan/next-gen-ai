import {
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
function ForgotPassword() {
  return (
    <>
    <div className="loginBg flex justify-center items-center ">
      <div className="grid grid-col-2 lg:grid-cols-2 gap-8 lg:gap-28">
        <div className="text-center">
          <img src="/logo-m.png" alt="Logo" className="w-20 h-20 mx-auto" />
          <div className="text-white text-lg mb-4 mt-3">
            NextGen AI <br /> Solutions Group
          </div>
          <div className="text-white text-2xl mb-2 font-bold">
            Welcome to
            <br /> NextGen AI Solutions Group
          </div>
          <div className="text-white mb-2">
            Solving Recruitment using Technology
          </div>
          <div className="flex gap-3 justify-center mt-4">
            <FacebookOutlined className="text-white" />
            <LinkedinOutlined className="text-white" />
            <InstagramOutlined className="text-white" />
          </div>
        </div>
        <div className="bg-white rounded flex justify-center flex-col p-10 w-80">
          <div className="text-center font-bold text-lg">Forgot Password</div>
          <Form className="flex flex-col mt-4 justify-center">
            <FormItem className="mb-3">
              <label>Email ID</label>
              <Input placeholder="Email Id" prefix={<MailOutlined />} className="rounded-none"/>
            </FormItem>
            <Button
              className="bg-[--secondary-color] rounded-none hover:bg-[--primary-color]"
              type="primary"
              block
            >
             Submit
            </Button>
            <div className="text-center mt-4">
            <Link to="/" className="text-[--secondary-color]">
              Back to Login
            </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <Footer className="bg-[--secondary-color] text-white text-center">© Copyright 2023 <a target="_blank" className="text-[--primary-color]" href="https://nexgenai.io/">NexGenAI.io</a> – A NexGenAI Holding Group. All Rights Reserved.</Footer>
    </>
  );
}
export default ForgotPassword;
