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
} from "../components/quoteGenerator/QuoteGeneratorElements";
import Cloudy1 from "../assets/cloud-and-thunder.png";
import Cloudy2 from "../assets/cloudy-weather.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { generateAQuote, quotesQueryName } from "@/src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import QuoteGeneratorModal from "@/components/quoteGenerator/QuoteGeneratorModal";

interface quoteAppData {
  id: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

interface GenerateAQuoteData {
  generateAQuote: {
    statusCode: number;
    headers: { [key: string]: string };
    body: string;
  };
}

function isGraphQLResult(response: any): response is GraphQLResult<{
  quotesQueryName: {
    items: [quoteAppData];
  };
}> {
  return (
    response.data &&
    response.data.quotesQueryName &&
    response.data.quotesQueryName.items
  );
}

export default function Home() {
  const [noOfQuotes, setNoOfQuotes] = useState<Number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [processingQuote, setProcessingQuote] = useState<boolean>(false);
  const [fetchCount, setFetchCount] = useState<boolean>(false);
  const [quoteReceived, setQuoteReceived] = useState<String | null>("");

  const getQuoteData = async () => {
    try {
      const response = await API.graphql<quoteAppData>({
        query: quotesQueryName,
        authMode: "AWS_IAM",
        variables: {
          queryName: "LIVE",
        },
      });
      if (!isGraphQLResult(response)) {
        throw new Error("Unexpected response from API.graphql");
      }

      if (!response.data) {
        throw new Error("Response data is undefined");
      }
      const numberOfQuotes =
        response.data.quotesQueryName.items[0].quotesGenerated;
      setNoOfQuotes(numberOfQuotes);
    } catch (error) {
      console.log("Error getting quote data");
    }
  };
  useEffect(() => {
    getQuoteData();
  }, [fetchCount]);

  const handleOpen = async () => {
    setOpen(true);
    setProcessingQuote(true);
    try {
      const runFunction = "runFunction";
      const runFunctionStringified = JSON.stringify(runFunction);
      const response = await API.graphql<GenerateAQuoteData>({
        query: generateAQuote,
        authMode: "AWS_IAM",
        variables: {
          input: runFunctionStringified,
        },
      });
      const stringifiedResponse = JSON.stringify(response);
      const restringifiedResponse = JSON.stringify(stringifiedResponse);
      const bodyIndex = restringifiedResponse.indexOf("body=") + 5;
      const bodybase64 = restringifiedResponse.substring(bodyIndex);
      const body = bodybase64.split(",")[0];
      setQuoteReceived(body);
      setFetchCount(!fetchCount);
      setProcessingQuote(false);
    } catch (error) {
      console.log("error in generating quote", error);
      setProcessingQuote(false);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setProcessingQuote(false);
    setQuoteReceived("");
  };

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
              <QuoteGenButton onClick={handleOpen}>
                <QuoteButtonText>Make a Quote</QuoteButtonText>
              </QuoteGenButton>
            </QuoteGenText>
          </QuoteGenContainer>

          <QuoteGeneratorModal
            open={open}
            close={handleClose}
            processingQuote={processingQuote}
            quoteReceived={quoteReceived}
          ></QuoteGeneratorModal>

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
