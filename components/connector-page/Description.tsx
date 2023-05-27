import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import TagContainner from "./TagContainner";

interface Props {
  name: string;
  description?: string;
}

const tags = ["Sleep", "Health", "Activity"];

const Description = ({ name }: Props) => {


  return (
    <Flex
      width={"full"}
      color={"whiteText"}
      justifyContent={{ base: "space-between", xl: "center" }}
      alignItems={"Center"}
      direction={{ base: "column", lg: "row" }}
    >
      <Box mr={{ base: 0, lg: 10, xl: 28 }}>
        {/* <Image alt={name} src={"./connector-sleep-icon.png"} /> */}
        <Image alt={name} src={"/connector-sleep-icon.png"} />
      </Box>
      <VStack
        alignItems={{ base: "center", lg: "start" }}
        gap={4}
        // pt={{ base: 14, lg: 4 }}
        // pb={4}
        pl={{ base: 0, lg: 12 }}
        borderColor={"breadcrumb"}
        borderLeftWidth={{ base: "0px", lg: "1px" }}
      >
        <Flex gap={2}>
          <Text fontSize={"24px"} fontWeight={700}>
            About Prifina/
          </Text>
          <Text fontSize={"24px"} fontWeight={700} color={"#FFFFFF60"}>
            {name}
          </Text>
        </Flex>
        <TagContainner tags={tags} />
        <Text
          maxW={"530px"}
          fontSize={"18px"}
          textAlign={{ base: "center", lg: "left" }}
        >
          Prifina Oura is a a data connector which mirrors the data attributes
          available form the Oura ring device. Although all Prifina user data is
          historical data from Oura is automatically retreived nightly.
        </Text>
        <Button
          px={4}
          bg="rgba(106, 217, 193, 0.8)"
          width={"fit-content"}
          _hover={{ bg: "hover" }}
          _active={{ bg: "active" }}
          display={{ base: "none", xl: "flex" }}
          rightIcon={<IoLogoGithub size={20} />}
        >
          View on Github
        </Button>
      </VStack>
    </Flex>
  );
};
export default Description;
