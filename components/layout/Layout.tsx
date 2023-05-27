import Header from "@/components/layout/Header";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Data Mine</title>
        <meta name="description" content="data mine by Prifina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        textAlign="center"
        fontSize="xl"
        minW={"205px"}
        minH={"100%"}
        direction={"column"}
        bg={"bgLight"}
      >
        {children}
      </Flex>
    </>
  );
};
export default Layout;
