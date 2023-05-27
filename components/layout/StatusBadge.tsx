import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
interface Props {
  status: string;
}
export function StatusBadge({ status }: Props) {
  return (
    <Center
      fontSize={"12px"}
      fontWeight={"700"}
      color={"bgItem"}
      bg={
        status === "Live Available"
          ? "Live"
          : status === "Requested"
          ? "Requested"
          : "primary"
      }
      borderRadius={"base"}
      py={1}
      pr={2}
      pl={4}
      top={-8}
      left={-1}
      position={"absolute"}
    >
      {status === "Live Available"
        ? "Live"
        : status === "Requested"
        ? "Requested"
        : "Upcoming"}
    </Center>
  );
}
