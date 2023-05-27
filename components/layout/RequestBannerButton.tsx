import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

export function RequestBannerButton() {
  const router = useRouter();
  const tabIndex = useRef(0);
  useEffect(() => {
    tabIndex.current = router.pathname.includes("/data-connectors") ? 1 : 0;
  }, [router]);

  return (
    <Button
      p={4}
      variant="solid"
      bg={"primary"}
      color={"bgItem"}
      width={"fit-content"}
      _hover={{
        backgroundColor: "hover",
      }}
      _active={{
        backgroundColor: "active",
      }}
    >
      {tabIndex.current ? "Request Connector" : "Request Data Source"}
    </Button>
  );
}
