"use client";

import { Avatar, Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  name: string;
  description: string;
}

const Description = ({ name, description }: Props) => {
  const router = useRouter();

  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const responce = await import(
          `../assets/icons/${name
            .toLowerCase()
            .trim()
            .replace(/ /g, "-")}_icon.png`
        );
        setIcon(responce.default.src);
      } catch (err) {
        setIcon(null);
      }
    };
    load();
  }, [name]);

  return (
    <Flex
      width={"full"}
      color={"whiteText"}
      justifyContent={{ base: "space-between", xl: "left" }}
      alignItems={"Center"}
      direction={{ base: "column", lg: "row" }}
    >
      <Box
        p={12}
        bg={"bgItem"}
        borderRadius={"xl"}
        mr={{ base: 0, lg: 12, xl: 48 }}
      >
        <Avatar
          name={name}
          src={icon || ""}
          borderRadius={"2xl"}
          width={"100px"}
          height={"100px"}
        />
      </Box>
      <VStack
        alignItems={{ base: "center", lg: "start" }}
        gap={6}
        pt={{ base: 14, lg: 4 }}
        pl={{ base: 0, lg: 12 }}
        borderColor={"breadcrumb"}
        borderLeftWidth={{ base: "0px", lg: "1px" }}
      >
        <Text fontSize={"24px"} fontWeight={700}>
          About {name}
        </Text>
        <Text
          maxW={"530px"}
          fontSize={"18px"}
          textAlign={{ base: "center", lg: "left" }}
        >
          {description}
          <Link
            pt={4}
            color={"linkText"}
            fontSize={"18px"}
            textAlign={{ base: "center", lg: "left" }}
            display={"block"}
            isExternal
          >
            https://ouraring.com/
          </Link>
        </Text>
      </VStack>
    </Flex>
  );
};
export default Description;
