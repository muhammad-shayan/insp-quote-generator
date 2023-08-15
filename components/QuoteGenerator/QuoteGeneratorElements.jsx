import styled from "styled-components";
import Image from "next/image";

export const BackgroundContainer = styled.div`
  background: linear-gradient(to right, #000046, #1cb5e0);
  background-size: 400% 400%;
  height: 100vh;
  width: 100vw;
  animation: gradient 6s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BgImage = styled(Image)`
  position: fixed;
  z-index: 1;
  bottom: 50px;
  right: -50px;
`;

export const Footer = styled.div`
  font-family: "Source Code Pro", monospace;
  width: 100vw;
  position: absolute;
  bottom: 20px;
  text-align: center;
  color: white;
  z-index: 99999;
`;

export const QuoteGenContainer = styled.div`
  height: 70vh;
  width: 70vw;
  min-height: 350px;
  min-width: 350px;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const QuoteGenText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const QuoteGenTitle = styled.div`
  font-family: "Permanent Marker", cursive;
  font-size: 50px;
  color: white;
  text-align: center;
  padding: 0px 20px 0px 20px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const QuoteGenSubtitle = styled.div`
  font-family: "Caveat", cursive;
  font-size: 35px;
  color: white;
  text-align: center;
  padding: 0px 20px 0px 20px;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

export const QuoteGenButton = styled.div`
  height: 100px;
  width: 300px;
  border: 2px solid darkgrey;
  border-radius: 20px;
  margin: auto;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transform-origin: center;

  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    filter: brightness(3);
    transform: scale(1.1);
  }
`;

export const QuoteButtonText = styled.div`
  color: white;
  font-family: "Caveat", cursive;
  font-size: 35px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  text-align: center;
`;
