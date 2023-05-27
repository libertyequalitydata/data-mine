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
        <Flex
          display={{ base: "none", lg: "flex" }}
          borderBottom={"1px"}
          borderColor={"tableBorder"}
          align={"center"}
          justify={"start"}
          px={4}
        >
          <CategoryTag name={attribute.dataCatagory} />
        </Flex>
        <Text
          p={4}
          display={{ base: "none", lg: "block" }}
          borderBottom={"1px"}
          borderColor={"tableBorder"}
        >
          {attribute.prifinaAttribute}
        </Text>
        <Text
          p={4}
          display={{ base: "none", lg: "block" }}
          borderBottom={"1px"}
          borderColor={"tableBorder"}
        >
          {attribute.attributeDescription}
        </Text>
        <Text
          p={4}
          display={{ base: "none", lg: "block" }}
          borderBottom={"1px"}
          borderColor={"tableBorder"}
        >
          {attribute.usersWithThis}
        </Text>
  
        <GridItem display={{ base: "block", lg: "none" }} colSpan={2}>
          <Accordion allowMultiple>
            <AccordionItem borderColor={"tableBorder"}>
              <h2>
                <AccordionButton fontSize={"12px"}>
                  <Box flex="6" textAlign="left">
                    {attribute.prifinaAttribute}
                  </Box>
                  <Flex flex="5" textAlign="left" justify={"left"}>
                    <CategoryTag name={attribute.dataCatagory} />
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text pb={4} color={"#FFFFFF80"}>
                  Attribute Description
                </Text>
                <Text pb={4}>{attribute.attributeDescription}</Text>
                <Flex justify={"space-between"}>
                  <Text color={"#FFFFFF80"}>Data Category</Text>
                  <Text color={"#FFFFFF80"}>{attribute.usersWithThis}</Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
      </>
    );
  };
  export default TableRow;
  