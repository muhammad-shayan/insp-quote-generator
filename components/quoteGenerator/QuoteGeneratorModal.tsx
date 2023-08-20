import { Modal, Fade } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CenteredLottie,
  DownloadConText,
  DownloadContainer,
  ModalCircularProgress,
  QuoteGenSubtitle,
  QuoteGenTitle,
  QuoteModalContainer,
  QuoteModalText,
} from "./QuoteGeneratorElements";
import { ImageContainer } from "./QuoteGeneratorElements";
import lottieJson from "../../assets/animated-photo.json";
import Image from "next/image";
interface QuoteGeneratorModalProps {
  open: boolean;
  close: () => void;
  processingQuote: boolean;
  quoteReceived: String | null;
}
const QuoteGeneratorModal = ({
  open,
  close,
  processingQuote,
  quoteReceived,
}: QuoteGeneratorModalProps) => {
  const wiseDevQuote = '"If you can center a div, anything is possible."';
  const wiseDevQuoteAuthor = "- a wise senior software engineer";
  const [blobUrl, setBlobUrl] = useState<string>("");
  const handleDownload = () => {
    const link = document.createElement("a");
    if (blobUrl) {
      link.href = blobUrl;
      link.download = "quote.png";
      link.click();
    }
  };

  useEffect(() => {
    if (quoteReceived) {
      const binaryData = Buffer.from(quoteReceived, "base64");
      const blob = new Blob([binaryData], { type: "image/png" });
      var blobUrlGenerated = URL.createObjectURL(blob);
      setBlobUrl(blobUrlGenerated);
    }
    return () => {
      URL.revokeObjectURL(blobUrlGenerated);
    };
  }, [quoteReceived]);

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      closeAfterTransition
    >
      <Fade in={open}>
        <QuoteModalContainer>
          <QuoteModalText>
            {processingQuote && !quoteReceived && (
              <>
                <ModalCircularProgress size="8rem" thickness={2.5} />
                <QuoteGenTitle>Creating your Quote...</QuoteGenTitle>
                <QuoteGenSubtitle style={{ marginTop: "20px" }}>
                  {wiseDevQuote}
                  <br></br>
                  <span style={{ fontSize: "26px" }}>{wiseDevQuoteAuthor}</span>
                </QuoteGenSubtitle>
              </>
            )}
            {quoteReceived && (
              <>
                <QuoteGenTitle>Download your quote!</QuoteGenTitle>
                <QuoteGenSubtitle style={{ marginTop: "20px" }}>
                  See a preview:
                </QuoteGenSubtitle>
                <ImageContainer>
                  <Image
                    src={blobUrl}
                    alt="Generated Quote Card"
                    width={150}
                    height={100}
                  />
                </ImageContainer>
                <DownloadContainer onClick={handleDownload}>
                  <CenteredLottie animationData={lottieJson} loop play />
                  <DownloadConText>Download your quote card</DownloadConText>
                </DownloadContainer>
              </>
            )}
          </QuoteModalText>
        </QuoteModalContainer>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModal;
