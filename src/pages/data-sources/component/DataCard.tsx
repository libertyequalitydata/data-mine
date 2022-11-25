import { StatusBadge } from "../../../component/StatusBadge";
import { Avatar, Badge, Box, Center, Text, VStack } from "@chakra-ui/react";

interface Props {
  name: string;
  img: string;
}

const DataCard = ({ name, img }: Props) => {
  return (
    <VStack
      spacing={8}
      pt={10}
      bgGradient="linear(to-t, bgItem, bgItemD)"
      borderRadius={"10px"}
      width={"205px"}
      height={"195px"}
      _hover={{ cursor: "pointer" }}
      position={"relative"}
      overflow={"hidden"}
    >
      <Avatar
        name={name}
        src={name}
        borderRadius={"2xl"}
        width={"60px"}
        height={"60px"}
      />
      <Text
        width={"full"}
        px={4}
        color={"whiteText"}
        fontSize={"lg"}
        fontWeight={600}
        noOfLines={2}
      >
        {name}
      </Text>
      <StatusBadge />
    </VStack>
  );
};
export default DataCard;
