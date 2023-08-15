import Head from "next/head";
import {
  BackgroundContainer,
  BgImage,
  Footer,
  QuoteButtonText,
  QuoteGenButton,
  QuoteGenContainer,
  QuoteGenSubtitle,
  QuoteGenText,
  QuoteGenTitle,
} from "../components/QuoteGenerator/QuoteGeneratorElements";
import Cloudy1 from "../assets/cloud-and-thunder.png";
import Cloudy2 from "../assets/cloudy-weather.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [noOfQuotes, setNoOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Inspirational Quotes Generator</title>
        <meta
          name="description"
          content="A website to generate inspirational quotes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackgroundContainer>
          <Image
            src={Cloudy1}
            height="300"
            alt="cloudy1"
            style={{ marginLeft: "70px" }}
          />
          <BgImage src={Cloudy2} height="250" alt="cloudy2" />

          <QuoteGenContainer>
            <QuoteGenText>
              <QuoteGenTitle>Daily Inspiration Generator</QuoteGenTitle>
              <QuoteGenSubtitle>
                Looking for a splash of inspiration? Generate a quote card with
                a random inspirational quote provided by{" "}
                <Link
                  href="https://zenquotes.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  ZenQuotes API
                </Link>
                .
              </QuoteGenSubtitle>
              <QuoteGenButton>
                <QuoteButtonText>Make a Quote</QuoteButtonText>
              </QuoteGenButton>
            </QuoteGenText>
          </QuoteGenContainer>

          <Footer>
            <>
              Quotes generated: {noOfQuotes}
              <br />
              Developed by Muhammad Shayan
            </>
          </Footer>
        </BackgroundContainer>
      </main>
    </>
  );
}
