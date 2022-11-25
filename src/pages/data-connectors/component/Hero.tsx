import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      width={"full"}
      bgGradient="linear(to-r, bgLight, bgDark)"
      style={{ marginTop: "62px" }}
    >
      <Flex
        py={14}
        pr={4}
        gap={[14, 14, 0, 0, 48]}
        direction={["column", "column", "row"]}
        justifyContent={{
          base: "space-between",
          lg: "space-around",
          xl: "center",
        }}
        alignItems={"center"}
        overflow={"hidden"}
      >
        <Box boxSize="auto" ml={[0, 0, "-30%", "-25%", 0]}>
          <Image
            src="./data_connectors_graphic.png"
            height={["full", "311px", "368px", "360px", "360px", "full"]}
          />
        </Box>

        <VStack color={"whiteText"} alignItems={"flex-start"} pl={[4, 4, 0]}>
          <Heading
            fontSize={["24px", "24px", "56px"]}
            fontWeight={300}
            textAlign={"left"}
            lineHeight={"0.9"}
          >
            <span style={{ fontWeight: "700" }}>RICH </span>HASSLE
            <br />
            FREE
            <span style={{ fontWeight: "700" }}> USER DATA</span>
          </Heading>
          <Text
            fontSize={{ base: "md", md: "2xl" }}
            noOfLines={4}
            color={"primary"}
            fontWeight={600}
            textAlign={"left"}
          >
            WITH PRIFINA DATA SOURCES
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={600}
            color={"grayText"}
            textAlign={"left"}
            maxW={"400px"}
          >
            Prifina helps users retreive, agregate and organize thier personal
            data in one loction. For developers this means you can build on
            incredibly rich sets of data combined in near limitless ways
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};
export default Hero;
