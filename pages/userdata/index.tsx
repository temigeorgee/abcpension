import TabDatable from "../../src/components/DataTable/DataTable";
import { Tag, Space } from "antd";
import { useContext, useState } from "react";
import { ThemeContext } from "../../src/context/userContext";
import { Button, Container } from "../../src/components";
import type { ColumnsType } from "antd/es/table";
import { truncate } from "../../src/utils/utils";
import { Modal } from "../../src/components/Modal/modal";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";

const AllPersonData = () => {
  const [rowInfo, setRowInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { userData } = useContext(ThemeContext);
  const router = useRouter();

  const data = [
    {
      title: "Employees",
      data: userData,
      columns: [
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Phone Number",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "RC Number",
          dataIndex: "rcnumber",
          key: "rcnumber",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <Button
                onClick={() => {
                  setRowInfo(record);
                  setShowModal(true);
                }}
              >
                See More
              </Button>
            </Space>
          ),
        },
      ],
    },
    {
      title: "Employers",
      data: userData && userData,
      columns: [
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Phone Number",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "RC Number",
          dataIndex: "rcnumber",
          key: "rcnumber",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <Button
                onClick={() => {
                  setRowInfo(record);
                  setShowModal(true);
                }}
              >
                See More
              </Button>
            </Space>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        data={rowInfo}
        userData={rowInfo}
      />
      <>
        <header className="bg-primary px-6 py-6 text-white font-bold  text-xl mb-4">
          User Information
        </header>
        <div className="flex item-center space-x-3 ml-6 cursor-pointer">
          <a href="/">
            <BsArrowLeftCircleFill
              // onClick={() => router.push("/")}
              className="w-8 h-8"
            />
          </a>
          <p className="text-lg font-semibold">Go back</p>
        </div>
        <Container>
          <TabDatable data={data || []} />
        </Container>
      </>
    </>
  );
};

export default AllPersonData;