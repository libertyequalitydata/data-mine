import { Flex } from "@chakra-ui/react";
interface props {
  text: string;
}

const ConnectorTag = ({ text }: props) => {
  return (
    <Flex
      bg={text.includes("+") ? "moreTag" : "subTag"}
      px={"3"}
      py={1}
      borderRadius={"full"}
      fontWeight={700}
      fontSize={"12px"}
      color={"bgItem"}
    >
      {text}
    </Flex>
  );
};
export default ConnectorTag;
