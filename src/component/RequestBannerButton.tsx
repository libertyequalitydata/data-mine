import { Button } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

export function RequestBannerButton() {
  const location = useLocation();

  const tabIndex = location.pathname.includes("/data-connectors") ? 1 : 0;

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
      {tabIndex ? "Request Connector" : "Request Data Source"}
    </Button>
  );
}
