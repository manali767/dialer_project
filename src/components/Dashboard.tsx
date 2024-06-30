import React from "react";
import logo from "../assests/id0fE-nW1E.jpeg";
import ModalPage from "./ModalPage";
import {
  ContactsOutlined,
  FieldTimeOutlined,
  MacCommandOutlined,
  MailOutlined,
  MoonOutlined,
  SettingOutlined,
  UserOutlined,
  WechatOutlined,
} from "@ant-design/icons";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="left_sidebar">
        <div className="heading">
          <img className="logo" src={logo} />
          <h2>ASTPP</h2>
        </div>

        <div className="tab">
          <UserOutlined />
          <h4>Team</h4>
        </div>

        <div className="tabs">
          <WechatOutlined />
          <h4>Chat</h4>
        </div>

        <div className="tabs">
          <FieldTimeOutlined />
          <h4>Call</h4>
        </div>

        <div className="tabs">
          <UserOutlined />
          <h4>Personal</h4>
        </div>

        <div className="tabs">
          <ContactsOutlined />
          <h4>Contacts</h4>
        </div>

        <div className="tabs">
          <MailOutlined />
          <h4>Voicemail</h4>
        </div>

        <div className="tabs">
          <SettingOutlined />
          <h4>Settings</h4>
        </div>
      </div>
      <ModalPage />
    </div>
  );
}

export default Dashboard;
