import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
interface Props {
  status: string;
}
export function StatusBadge({ status }: Props) {
  const [stat, setStat] = useState<string>("");
  useEffect(() => {}, []);
  return (
    <Center
      fontSize={"12px"}
      fontWeight={"700"}
      color={"bgItem"}
      bg={status}
      borderRadius={"base"}
      py={1}
      pr={2}
      pl={4}
      top={-4}
      left={-1}
      position={"absolute"}
    >
      {status}
    </Center>
  );
}
