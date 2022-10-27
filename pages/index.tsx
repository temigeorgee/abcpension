import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../src/components/Button";
import Input from "../src/components/Input/input";
import { message, Tabs, Space } from "antd";
import { Container } from "../src/components";
import EmployeeForm from "../src/components/UI/Employee/EmployeeForm";
import EmpolyerForm from "../src/components/UI/Employer/EmpolyerForm";
import { useRouter } from "next/router";
import Link from "next/link";

const Banner = styled.div`
  ${tw`bg-primary py-3 lg:py-6`}
`;
const BannerCaption = styled.div`
  ${tw`flex items-center justify-between flex-col md:flex-row lg:gap-y-0 gap-y-2`}
`;
const BannerCaptionText = styled.div`
  ${tw`text-white text-xs md:text-base lg:text-2xl font-semibold !leading-4 tracking-wide`}
  > span {
    ${tw`font-playball text-3xl lg:text-5xl tracking-wide`}
  }
`;
const ImageContainer = styled.div`
  ${tw`object-cover bg-header-bg bg-center bg-no-repeat w-full relative text-white rounded-tr-2xl rounded-br-2xl py-36 px-12`}
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  :before {
    position: absolute;
    /* display: block; */
    transform: translateX(-50%);
    /* left: 50%; */
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    content: "";
  }
`;

type LoginType = "employee" | "employer";
const Home: NextPage = () => {
  const [loginType, setLoginType] = useState<LoginType>("employee");
  const router = useRouter();

  const items: {
    label: string;
    key: string;
    children: JSX.Element;
  }[] = [
    { label: "Register an Employee", key: "1", children: <EmployeeForm /> }, // remember to pass the key prop
    { label: "Register an Employer", key: "2", children: <EmpolyerForm /> },
  ];

  return (
    <>
      <Head>
        <title>ABC-Pension</title>
        <meta name="description" content="ABC" />
      </Head>
      <div className="flex items-center justify-center h-screen">
        <Container>
          <main className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center">
            <div className="basis-1/2 bg-white rounded-tl-2xl rounded-bl-2xl  shadow-2xl flex grid-cols-2">
              <div className=" p-5">
                <div className="text-left font-bold">
                  <span className="text-green-500">ABC</span>Pensions
                </div>

                <div className="py-10">
                  <Tabs items={items} />
                </div>
              </div>
            </div>
            <ImageContainer className="basis-1/4 hidden lg:block">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Join Us Today
              </h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10"></p>
              {/* <Link href={}> */}
              <Button onClick={() => router.push("/userdata")}>
                View All Employers/Employees
              </Button>
              {/* </Link> */}
            </ImageContainer>
          </main>
        </Container>
      </div>
    </>
  );
};

export default Home;
