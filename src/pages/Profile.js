import React, { useState } from "react";
import { Button, Form, Input, Upload, message, Tabs } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const Profile = () => {

  const [loading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    setImageUrl(info.file.originFileObj);
  };
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      setImageUrl({ imageUrl: "" });
    });
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };

  const validateMessages = {
    required: "${label} is required",
    types: {
      email: "${label} is not a valid email",
      number: "${label} is not a valid number",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const tabItems = [
    {
      label: `Profile`,
      key: "profile",
      children: (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 6,
              }}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                previewFile={getBase64}
                showUploadList={false}
                onChange={handleChange}
                beforeUpload={beforeUpload}
              >
                {imageUrl ? (
                  <img
                    src={URL.createObjectURL(imageUrl)}
                    alt="avatar"
                    style={{
                      width: "100%",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
            <Form.Item
              name={["user", "firstname"]}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>
            <Form.Item
              name={["user", "lastname"]}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Enter Email" />
            </Form.Item>
            <Form.Item
              name={["user", "phone"]}
              label="Phone"
              rules={[
                {
                  type: "text",
                },
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Enter Phone No." />
            </Form.Item>
            <Form.Item className="flex justify-end">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[--primary-color] w-auto"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
      ),
    },
    {
      label: `Change Password`,
      key: "changePassword",
      children: (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "password"]}
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
            <Form.Item
              name={["user", "cpassword"]}
              label="Confirm Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
            <Form.Item className="flex justify-end">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[--primary-color] w-auto"
              >
                Change Password
              </Button>
            </Form.Item>
          </Form>
      ),
    },
  ];

  return (

          <Tabs
            className="profileTabs"
            defaultActiveKey="profile"
            type="card"
            size={"medium"}
            items={tabItems}
          />
  );
};
export default Profile;
