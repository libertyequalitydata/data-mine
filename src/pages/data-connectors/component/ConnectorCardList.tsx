import { SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import RequestConnectors from "./RequestConnectors";
import ConnectorCard from "./ConnectorCard";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const ConnectorCardList = ({ children }: Props) => {
  return (
    <>
      <SimpleGrid
        minChildWidth={{ base: "full", xl: "318px" }}
        columnGap={4}
        spacingY={8}
        width={"full"}
        justifyItems={{ base: "center", xl: "left" }}
      >
        <ConnectorCard />
        <ConnectorCard />
        <ConnectorCard />
        <ConnectorCard />
        <ConnectorCard />
      </SimpleGrid>
      <RequestConnectors />
    </>
  );
};
export default ConnectorCardList;
