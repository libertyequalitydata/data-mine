import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  GridItem,
  Text,
} from "@chakra-ui/react";
import CategoryTag from "./CategoryTag";

interface Props {
  attribute: any;
}

const TableRow = ({ attribute }: Props) => {
  return (
    <>
      <Text
        p={4}
        display={{ base: "none", lg: "block" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
      >
        {attribute.properties["Attribute Name"].title[0].plain_text}
      </Text>
      <Text
        p={4}
        display={{ base: "none", lg: "block" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
      >
        {attribute.properties["Attribute Name"].title[0].plain_text}
      </Text>
      <Text
        p={4}
        display={{ base: "none", lg: "block" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
      >
        {attribute.properties["Attribute description"]?.rich_text.map(
          (text: any) => <Text>{text.plain_text}</Text>
        ) || ""}
      </Text>
      <Flex
        display={{ base: "none", lg: "flex" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
        align={"center"}
        justify={"center"}
        px={2}
      >
        <CategoryTag name={"Health"} />
      </Flex>
      {/* below is a row for smaller screen  */}
      <GridItem display={{ base: "block", lg: "none" }} colSpan={2}>
        <Accordion allowMultiple>
          <AccordionItem borderColor={"tableBorder"}>
            <AccordionButton fontSize={"12px"}>
              <Box flex="1" textAlign="left">
                {attribute.properties["Attribute Name"].title[0].plain_text}
              </Box>
              <Box flex="1" textAlign="left">
                {attribute.properties["Attribute Name"].title[0].plain_text}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text pb={4} color={"#FFFFFF80"}>
                Attribute Description
              </Text>
              <Text pb={4}>
                {attribute.properties["Attribute description"]?.rich_text.map(
                  (text: any) => <Text>{text.plain_text}</Text>
                ) || ""}
              </Text>
              <Flex justify={"space-between"}>
                <Text color={"#FFFFFF80"}>Data Category</Text>
                <CategoryTag name={"Health"} />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </GridItem>
    </>
  );
};
export default TableRow;
