import { Button } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

export function RequestButton() {
  const location = useLocation();

  const tabIndex = location.pathname.includes("/data-connectors") ? 1 : 0;

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
      {tabIndex ? "Request Connector" : "Request Data Source"}
    </Button>
  );
}
