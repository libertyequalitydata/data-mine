import { Divider, Text, VStack } from "@chakra-ui/react";

const Info = () => {
  return (
    <VStack pt={10} gap={2} color={"whiteText"} align={"center"} width={"full"}>
      <Text fontSize={"24px"} fontWeight={700} textAlign={"center"}>
        How Do Data Connectors Work?
      </Text>
      <Divider orientation="horizontal" maxW={"500px"} />
      <Text
        fontSize={"18px"}
        fontWeight={400}
        maxW={"620px"}
        textAlign={"center"}
      >
        Data connectors allow connecting to pre-processed data objects through a
        single connector. This allows dynamic access to frequently and valuably
        combined data objects.
      </Text>
    </VStack>
  );
};
export default Info;
