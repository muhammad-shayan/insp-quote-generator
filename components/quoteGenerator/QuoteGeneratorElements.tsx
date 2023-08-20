import styled from "styled-components";
import Image from "next/image";
import { Box, CircularProgress } from "@mui/material";
import Lottie from "react-lottie-player";

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

export const QuoteModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70vh;
  width: 70vw;

  background: rgb(193 193 255 / 19%);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:focus {
    outline: none !important;
  }
`;

export const QuoteModalText = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalCircularProgress = styled(CircularProgress)`
  color: white !important;
  stroke-linecap: round;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-left: -55px;
`;

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  top: 10px;
  margin-top: 20px;
  transition: 0.3s all ease-in-out;
  width: fit-content;
  margin: auto;
  height: 100px;
  z-index: 99999;

  &:hover {
    transform: scale(4.8);
    z-index: 99999;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
    /* height: 100px; */
    @media only screen and (max-width: 800px) {
      transform: scale(3.8);
      z-index: 99999;
      transition: 0.3s all ease-in-out;
      box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
    }
    @media only screen and (max-width: 600px) {
      transform: scale(2.8);
      z-index: 99999;
      transition: 0.3s all ease-in-out;
      box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
    }
  }
`;

export const CenteredLottie = styled(Lottie)`
  width: 250px;
  height: 250px;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  margin-top: -40px;
  pointer-events: none;
`;

export const DownloadContainer = styled.div`
  border: 2px solid darkgrey;
  width: 400px;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
  transform: scale(0.7);
  width: calc(70vw / 2);
  margin: auto;
  &:hover {
    background: rgb(193 193 255 / 3%);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
`;

export const DownloadConText = styled.div`
  color: white;
  font-family: "Caveat", cursive;
  font-size: 35px;
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0px 20px 0px 20px;
  margin-top: -60px;
  margin-bottom: 10px;
  pointer-events: none;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
