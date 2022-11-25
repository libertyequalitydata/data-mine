import { Center } from "@chakra-ui/react";
import React from "react";
export function StatusBadge({}) {
  return (
    <Center
      fontSize={"xs"}
      fontWeight={"bold"}
      color={"bgItem"}
      bg={"primary"}
      borderRadius={"base"}
      py={1}
      pr={2}
      pl={4}
      top={-8}
      left={-2}
      position={"absolute"}
    >
      New
    </Center>
  );
}
