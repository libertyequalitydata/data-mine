import { Button, Flex, HStack } from "@chakra-ui/react";
import PeriodMenu from "./PeriodMenu";

interface Props {
  zoom: boolean;
  setZoom: any;
}

const AttributesMenu = ({ zoom, setZoom }: Props) => {
  return (
    <HStack
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={14}
      gap={4}
      wrap={["wrap", "nowrap"]}
    >
      <Flex gap={4}>
        <Button
          borderRadius={4}
          bg={"bgLight"}
          border={"2px"}
          borderColor={zoom ? "bgLight" : "primary"}
          _hover={{ backgroundColor: "catHover" }}
          _focus={{ backgroundColor: "bgLight" }}
          onClick={() => setZoom(false)}
          px={6}
        >
          Base
        </Button>
        <Button
          borderRadius={4}
          bg={"bgLight"}
          border={"2px"}
          borderColor={zoom ? "primary" : "bgLight"}
          _hover={{ backgroundColor: "catHover" }}
          _focus={{ backgroundColor: "bgLight" }}
          onClick={() => setZoom(true)}
          px={6}
        >
          Zoom
        </Button>
      </Flex>
      {zoom && <PeriodMenu />}
    </HStack>
  );
};
export default AttributesMenu;
