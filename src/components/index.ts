import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 25px;
    padding-left: 25px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-right: -15px;
  margin-bottom: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: center;
  flex-direction: row;
`;
export const Column = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const Button = styled.button<{
  icons?: boolean;
  weight?: boolean;
  primary?: boolean;
  white?: boolean;
  width?: boolean;
  className?: string;
}>`
  ${({ icons }) => (icons ? tw`flex items-center justify-center` : "")};
  border-radius: 59.65px;
  background: ${({ primary }) => (primary ? "#008300" : "#FFFFFF")};
  white-space: nowrap;
  color: ${({ white }) => (white ? "white" : "#008300")};
  padding: 11px 26.5px;
  font-weight: ${({ weight }) => (weight ? 500 : 700)};
  border: ${({ white }) => (white ? "none" : "1px solid #b8d7c7")};
  font-size: 14px;
  outline: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #ffff;
    background: ${({ primary }) => (primary ? "#145C53 " : "#DCEBE3")};
  }
  width: ${({ width }) => (width ? "" : "100%")};
  @media screen and (max-width: 960px) {
    width: ${({ width }) => (width ? "" : "100%")};
  }
`;

export const FlexContainer = styled.div`
  ${tw`flex items-center`}
  ${tw`cursor-pointer`};
`;

export const Title = styled.h2`
  ${tw`text-secondary text-lg font-extrabold text-center`}
`;
export const ModalTitle = styled.div`
  ${tw`flex items-center justify-between mb-4`}
`;
