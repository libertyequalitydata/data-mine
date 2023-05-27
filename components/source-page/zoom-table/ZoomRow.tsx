import { Attribute } from "@/@types/types";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import CategoryTag from "../data-table/CategoryTag";

interface Props {
  attribute: any;
}

const ZoomRow = ({ attribute }: Props) => {
  return (
    <>
      <Flex
        p={4}
        borderRight={"1px"}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
        alignItems={"center"}
      >
        <Text
          transform={"rotate(180deg)"}
          sx={{
            "writing-mode": "tb-rl",
          }}
          fontWeight={600}
          letterSpacing={"1px"}
          opacity={"70%"}
        >
          {attribute.attributeName}
        </Text>
      </Flex>
      <GridItem
        colSpan={{ base: 4, lg: 3 }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
      >
        {attribute.att.map((obj: Attribute, idx: number) => (
          <Grid
            key={idx}
            gridTemplateColumns={{
              base: "1fr ",
              lg: "1fr 1fr 1fr",
            }}
            width={"full"}
            bg={"bgItemD"}
            fontSize={"12px"}
            opacity={"70%"}
          >
            <Text p={4} display={{ base: "none", lg: "block" }}>
              {obj.attributeName}
            </Text>
            <Text p={4} display={{ base: "none", lg: "block" }}>
              {obj.attributeName}
            </Text>
            <Text p={4} display={{ base: "none", lg: "block" }}>
              obj.Aggregate
            </Text>
            {/* below is a row for smaller screen  */}
            <GridItem display={{ base: "Flex", lg: "none" }}>
              <Accordion w={"full"} allowMultiple>
                <AccordionItem borderColor={"bgDark"}>
                  <AccordionButton fontSize={"12px"}>
                    <Box flex="1" textAlign="left">
                      {obj.attributeName}
                    </Box>

                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Flex
                      w={"full"}
                      justifyContent={"space-between"}
                      wrap={"wrap"}
                    >
                      <Text pb={4} color={"#FFFFFF80"}>
                        Prifina Attribute :
                      </Text>
                      <Text pb={4}>
                        {
                          obj.attributeName
                        }
                      </Text>
                    </Flex>
                    <Flex
                      w={"full"}
                      justifyContent={"space-between"}
                      wrap={"wrap"}
                    >
                      <Text pb={4} color={"#FFFFFF80"}>
                        Aggregate :
                      </Text>
                      <Text pb={4}>obj.Aggregate</Text>
                    </Flex>
                    <Flex
                      w={"full"}
                      justifyContent={"space-between"}
                      wrap={"wrap"}
                      alignItems={"start"}
                    >
                      <Text pb={4} color={"#FFFFFF80"}>
                        Data Category :
                      </Text>
                      <CategoryTag name={"Health"} />
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
          </Grid>
        ))}
      </GridItem>
      <Flex
        display={{ base: "none", lg: "block" }}
        borderBottom={"1px"}
        borderLeft={"1px"}
        borderColor={"tableBorder"}
        align={"center"}
        justify={"left"}
        px={2}
      >
        <Center pt={6} alignSelf={"flex-start"}>
          <CategoryTag name={"Health"} />
        </Center>
      </Flex>
    </>
  );
};
export default ZoomRow;
