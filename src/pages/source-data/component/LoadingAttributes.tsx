import { HStack, Skeleton, VStack } from "@chakra-ui/react";

const LoadingAttributes = () => {
  const arr = ["att1", "att2", "att3", "att4", "att5", "att6", "att7", "att8"];
  return (
    <VStack width={"full"}>
      {arr.map((att) => (
        <Skeleton
          key={att}
          width={"full"}
          startColor="bgItem"
          endColor="menuSelect"
        >
          <HStack height={"60px"}></HStack>
        </Skeleton>
      ))}
    </VStack>
  );
};
export default LoadingAttributes;
