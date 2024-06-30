import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import logo from "../assests/id0fE-nW1E.jpeg";
import { useNavigate } from "react-router-dom";

const mockUserData = {
  email: "manali@example.com",
  password: "password123",
};

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const { Email, Password } = values;
    if (Email === mockUserData.email && Password === mockUserData.password) {
      console.log("done");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login">
      <div className="left"></div>
      <div className="right"></div>
      <div className="login_card">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="logo" style={{ width: 40, height: 40 }} src={logo} />
          <h2>ASTPP</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            <span>Welcome Back !</span>
            <br />
            Sign in to continue to ASTPP
          </p>
        </div>
        <Form
          className="login_form"
          name="normal_login"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          style={{
            width: "90%",
          }}
        >
          <Form.Item
            name="Email"
            label="Extension Number/Email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Password"
            label="Password"
            className="password"
            rules={[{ required: true, message: "Password is required!" }]}
          >
            <Input />
          </Form.Item>
          {error && <p style={{ color: "red" }}>*{error}</p>}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login_button">
              Sign In
            </Button>
          </Form.Item>
          <div className="or">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <Button className="login_button">
            <h4>Sign In with Google</h4>
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
