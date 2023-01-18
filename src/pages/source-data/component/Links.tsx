import { Flex, Link, Text, VStack } from "@chakra-ui/react";

interface Props {
  docs: string;
  api: string;
}

const Links = ({ docs, api }: Props) => {
  return (
    <VStack
      color={"whiteText"}
      fontSize={"20px"}
      alignItems={"left"}
      width={"full"}
    >
      <Flex
        gap={2}
        alignItems={"center"}
        justifyContent={["center", "left"]}
        flexWrap={["wrap", "nowrap"]}
      >
        <Text whiteSpace={"nowrap"}>Source Docs: </Text>
        <Link
          noOfLines={1}
          color={"linkText"}
          fontSize={"18px"}
          href={docs}
          isExternal
        >
          {docs}
        </Link>
      </Flex>
      <Flex
        gap={2}
        alignItems={"center"}
        justifyContent={["center", "left"]}
        flexWrap={["wrap", "nowrap"]}
      >
        API:{" "}
        <Link noOfLines={1} color={"linkText"} fontSize={"18px"} isExternal>
          {api}
        </Link>
      </Flex>
    </VStack>
  );
};
export default Links;
