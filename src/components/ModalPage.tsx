import React, { useState } from "react";
import {
  AutoComplete,
  Input,
  Modal,
  Tag,
  Form,
  Dropdown,
  Tooltip,
  Button,
  Space,
  Card,
  Avatar,
  Radio,
  Switch,
  Select,
} from "antd";
import {
  AudioFilled,
  CiCircleFilled,
  CloseCircleFilled,
  ContactsFilled,
  DownOutlined,
  MessageFilled,
  MoreOutlined,
  MutedFilled,
  PauseCircleFilled,
  PhoneFilled,
  PhoneOutlined,
  PlusCircleFilled,
  SearchOutlined,
  StarFilled,
  SwapOutlined,
  TableOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import {
  MacCommandOutlined,
  MoonOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { setFilteredOptions, setInputValue } from "../modalSlice";
import { RootState } from "../store";

const dialers = [
  {
    logo: <PauseCircleFilled />,
    tag: "Hold",
  },
  {
    logo: <AudioFilled />,
    tag: "Mute",
  },
  {
    logo: <PlusCircleFilled />,
    tag: "New Call",
  },
  {
    logo: <ContactsFilled />,
    tag: "Conference",
  },
  {
    logo: <PhoneFilled />,
    tag: "Truecaller",
  },
  {
    logo: <SwapOutlined />,
    tag: "Alt",
  },
  {
    logo: <SwapOutlined />,
    tag: "Record",
  },
  {
    logo: <TableOutlined />,
    tag: "Keypad",
  },
  {
    logo: <VideoCameraOutlined />,
    tag: "video",
  },
];

const ModalPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isSelected, setSelected] = useState(false);

  const dispatch = useDispatch();
  const filteredOptions = useSelector(
    (state: RootState) => state.modal.filteredOptions
  );
  const inputValue = useSelector((state: RootState) => state.modal.inputValue);

  const showModal = () => {
    setIsModalOpen(true);
    dispatch(setInputValue(""));
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setDropdownVisible(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(setInputValue(""));
    setSelected(false);
  };

  const handleSearch = (value: any) => {
    console.log(typeof value);
    dispatch(setFilteredOptions(value));
  };

  const handleChange = (value: any) => {
    dispatch(setInputValue(value));
  };

  const handleDropdownVisibleChange = (visible: boolean) => {
    setDropdownVisible(visible);
  };

  const handleSelect = (value: any) => {
    dispatch(setInputValue(value));
    setSelected(true);
    setDropdownVisible(false);
  };

  const handleButtonClick = (digit: string) => {
    console.log(typeof(digit), digit);
    dispatch(setInputValue(inputValue + digit));
  };

  return (
    <div className="right_sidebar">
      <div className="icons">
        <MoonOutlined className="icon_dashboard" />
        <MacCommandOutlined className="icon_dashboard"/>
        <Button
          className="phone_outlined"
          type="primary"
          shape="circle"
          icon={<PhoneOutlined />}
          onClick={showModal}
        />
        <Button shape="circle"  className="icon_dashboard" icon={<UserOutlined />} />
      </div>
      <div className="content">
        <div className="text">
          <h2 style={{ marginLeft: "8px" }}>Team</h2>
        </div>
        <div
          style={{ marginLeft: "10px", padding: "20px" }}
          className="form_sidebar"
        >
          <div className="form_line" style={{ display: "flex", justifyContent: "space-between", padding: 20, backgroundColor: 'white', alignItems: 'center' }}>
              <Form.Item
                name="Search Users"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  prefix={<SearchOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <div className="switch" style={{ display: "flex" }}>
                <Form.Item label="Personal" valuePropName="checked" style={{marginRight: 20}}>
                  <Switch />
                </Form.Item>
                <Form.Item>
                  <Select value="demo">
                    <Select.Option value="demo">All Groups</Select.Option>
                  </Select>
                </Form.Item>
             
            </div>
          </div>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "space-evenly",
            }}
          >
            {[...Array(15)].map((_, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: "10px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Avatar
                    style={{ marginRight: 10 }}
                    size={50}
                    icon={<UserOutlined />}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ margin: 0 }}>John Doe</h3>
                    <p style={{ margin: 0 }}>567948797</p>
                  </div>
                </div>
                <div
                  className="images"
                  style={{ display: "flex", marginTop: 20, gap: 20 }}
                >
                  <PhoneFilled className="phone_filled" />
                  <VideoCameraOutlined />
                  <MessageFilled />
                  <StarFilled />
                  <MoreOutlined />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Modal
        className="right-side-modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {isSelected ? (
          <>
            <h1
              style={{ color: "white", textAlign: "center", marginTop: "20px" }}
            >
              {inputValue}
            </h1>
            <h3 style={{ color: "white", textAlign: "center" }}></h3>
            <h3 style={{ color: "white", textAlign: "center" }}>3:45</h3>
            <div className="dialer-logo-buttons">
              {dialers.map((digit) => (
                <Button>
                  <div className="dialers">
                    {digit.logo}
                    {digit.tag}
                  </div>
                </Button>
              ))}
            </div>
            <div className="footer">
              <VideoCameraOutlined />
              <Button
                className="phone"
                style={{ backgroundColor: "red" }}
                shape="circle"
                onClick={handleCancel}
                icon={<PhoneFilled />}
              />
              <CloseCircleFilled />
            </div>
          </>
        ) : (
          <>
            <div className="input-container">
              <AutoComplete
                options={filteredOptions}
                style={{ width: "100%" }}
                onSearch={handleSearch}
                value={inputValue}
                onChange={handleChange}
                onSelect={handleSelect}
                onDropdownVisibleChange={handleDropdownVisibleChange}
                open={inputValue.length > 0}
                popupClassName="custom-dropdown"
                dropdownStyle={{ maxHeight: 100, overflowY: "auto" }}
                dropdownRender={(menu) => (
                  <div>
                    {menu}
                    <div style={{ padding: "8px", cursor: "pointer" }}></div>
                  </div>
                )}
              >
                <Input
                  placeholder="Enter name/number"
                  className="custom-input"
                  style={{
                    fontSize: "24px",
                    padding: "10px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                  onFocus={(e) => e.preventDefault()}
                />
              </AutoComplete>
            </div>
            <div className="dialer-buttons">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
                (digit) => (
                  <Button key={digit} className="dialer-button" onClick={() => handleButtonClick(digit)}>
                  {digit}
                </Button>
                )
              )}
            </div>
            <div className="footer">
              <VideoCameraOutlined />
              <Button
                className="phone"
                style={{
                  backgroundColor: "green",
                  width: "40px",
                  height: "40px",
                }}
                shape="circle"
                icon={<PhoneFilled />}
              />
              <CloseCircleFilled />
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ModalPage;
