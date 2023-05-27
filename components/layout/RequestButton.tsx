import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

export function RequestButton() {
  const router = useRouter();
  const tabIndex = useRef(0);
  useEffect(() => {
    tabIndex.current = router.pathname.includes("/data-connectors") ? 1 : 0;
  }, [router]);

  return (
    <Button
      display={{
        base: "none",
        md: "flex",
      }}
      px={10}
      variant="outline"
      borderColor={"primary"}
      color={"primary"}
      _hover={{
        borderColor: "hover",
        color: "hover",
      }}
      _active={{
        borderColor: "active",
        color: "active",
      }}
    >
      {tabIndex.current ? "Request Connector" : "Request Data Source"}
    </Button>
  );
}
