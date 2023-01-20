import { Flex, Skeleton, Text, VStack } from "@chakra-ui/react";

const LoadingSources = () => {
  const arr = ["skl1", "skl2", "skl3", "skl4", "skl5", "skl6"];
  return (
    <>
      <Text color={"whiteText"} fontSize={"24px"} fontWeight={600}>
        Loading ...
      </Text>
      <Flex gap={8} flexWrap={"wrap"} justify={"left"} width={"full"}>
        {arr.map((item) => (
          <Skeleton
            key={item}
            borderRadius={"10px"}
            startColor="bgLight"
            endColor="catHover"
          >
            <VStack minW={"205px"} height={"195px"}></VStack>
          </Skeleton>
        ))}
      </Flex>
    </>
  );
};
export default LoadingSources;
