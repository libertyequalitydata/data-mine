import { Flex, Image, SimpleGrid, Text, VStack, Wrap } from "@chakra-ui/react";
import { useEffect } from "react";
import ConnectorTag from "./ConnectorTag";
import TagContainner from "./TagContainner";

const DataCard = () => {
  useEffect(() => {});
  return (
    <VStack
      spacing={4}
      p={8}
      pt={14}
      bgGradient="linear(to-t, bgItem, bgItem 34%)"
      borderRadius={"10px"}
      alignItems={"start"}
      width={{ base: "full", xl: "318px" }}
    >
      <Wrap spacing={4}>
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
      </Wrap>
      <Text color={"whiteText"} fontSize={"lg"} fontWeight={600}>
        Prifina/routePurchaseRate
      </Text>
      <Text color={"whiteText"} fontSize={"md"}>
        Compare historical purchace data,
        <br />
        location and GPS and ratings data.
      </Text>
      <TagContainner tags={["sleep", "Health and Fitness", "security"]} />
    </VStack>
  );
};
export default DataCard;
