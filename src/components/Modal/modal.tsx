{
  /* @ts-ignore */
}
import React, { useRef, useEffect, useCallback, useState, FC } from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";
import tw from "twin.macro";

const Background = styled.div`
  width: 99.9%;
  height: 99.9%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalWrapper = styled.div`
  width: 500px;
  /* padding 0 2rem 2rem; */
  // height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  ${tw`space-y-6`}
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  line-height: 1.8; */
  color: #141414;
  /* padding: 2rem; */
  /* p {
    margin-bottom: 1rem;
  }
  button {
    width: 100%;
  } */
`;
const InfoWrapper = styled.div`
  ${tw`flex flex-wrap gap-10 gap-x-12 w-11/12`}
`;

const ModalTitleContainer = styled.div`
  ${tw`flex items-center justify-start space-x-2 py-6`}
  color: var(--primary-color);
  padding-right: 5rem;
`;
const ModalTitle = styled.h3`
  ${tw`text-xl font-bold text-center ml-6`}
  color: black;
  background-color: var(--primary-color);
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
const InfoItem = styled.div`
  ${tw`flex flex-col space-y-2`}
`;

const InfoTitle = styled.p`
  ${tw`font-semibold text-sm leading-[22px] text-black`}
`;
const InfoValue = styled.p`
  ${tw`font-bold text-base leading-[28px]`};
`;
type props = {
  showModal: boolean;
  setShowModal: any;
  userData: any;
};

export const Modal: FC<props> = ({ showModal, setShowModal, userData }) => {
  {
    /* @ts-ignore */
  }
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalTitleContainer>
                {/* <FaPlusCircle size={28} /> */}
                <ModalTitle>Details</ModalTitle>
              </ModalTitleContainer>
              <ModalContent>
                <div className="grid grid-cols-2 space-x-6 px-6">
                  <InfoItem>
                    <InfoTitle>Id:</InfoTitle>
                    <InfoValue>{userData.id ?? ""}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>Fullname:</InfoTitle>
                    <InfoValue>{userData.fullname ?? "-"}</InfoValue>
                  </InfoItem>
                </div>
                <div className="grid grid-cols-2 space-x-6 px-6 ">
                  <InfoItem>
                    <InfoTitle>Email:</InfoTitle>
                    <InfoValue>
                      {userData.email == " " ? "-" : userData.email}
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>Tin:</InfoTitle>
                    <InfoValue>
                      {userData.tin == "" ? "-" : userData.tin}
                    </InfoValue>
                  </InfoItem>
                </div>
                <div className="grid grid-cols-2 space-x-6 px-6">
                  <InfoItem>
                    <InfoTitle>Phone:</InfoTitle>
                    <InfoValue>
                      {userData.phone == " " ? "-" : userData.phone}
                    </InfoValue>
                  </InfoItem>

                  <InfoItem>
                    <InfoTitle>RC Number:</InfoTitle>
                    <InfoValue>
                      {userData.rcnumber == "" ? "-" : userData.rcnumber}
                    </InfoValue>
                  </InfoItem>
                </div>
              </ModalContent>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)}>
                {" "}
                X{" "}
              </CloseModalButton>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
