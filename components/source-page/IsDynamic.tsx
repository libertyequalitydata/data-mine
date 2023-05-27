import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoLayers } from "react-icons/io5";
import DynamicIcon from "../assets/DynamicIcon";

interface Props {
  dynamic: boolean;
}

const IsDynamic = ({ dynamic }: Props) => {
  return (
    <Flex display={dynamic ? "flex" : "none"} alignItems={"center"} gap={2}>
      <DynamicIcon color={"dynamicColor"} boxSize={"5"} />
      <Text color={"whiteText"}>Dynamic Data</Text>
    </Flex>
  );
};
export default IsDynamic;
