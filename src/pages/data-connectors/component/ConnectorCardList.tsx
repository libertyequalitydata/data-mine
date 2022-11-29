import { SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import RequestConnectors from "./RequestConnectors";
import ConnectorCard from "./ConnectorCard";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const connectors = [
  {
    name: "sleep",
    text: "Understand sleep pattern, habits and influences with this broad set of sleep related ",
    tags: ["Health and Fitness"],
    icons: ["sleep"],
    status: "Requested",
  },
  {
    name: "oura",
    text: "Prifina user data set which contains data attributes retreived from Oura ring. ",
    tags: ["Health and Fitness"],
    icons: ["sleep"],
    status: "Live",
  },
  {
    name: "routePurchaseRate",
    text: "Compare historical purchace data, location and GPS and ratings data. ",
    tags: ["Health and Fitness", "Entertainment", "Finance"],
    icons: ["finance", "star", "location"],
    status: "Requested",
  },
  {
    name: "gpsNetflix",
    text: "Prifina Netflix data crossed with location history. ",
    tags: ["Health and Fitness", "Entertainment"],
    icons: ["location", "entertainment"],
    status: "Live",
  },
  {
    name: "mediaVitals",
    text: "Vital health data attributes combined with viewing history data from a variety of sources.",
    tags: [
      "Health and Fitness",
      "Location and Navigation",
      "small",
      "this tag should be hidden",
      "this tag should be hidden",
    ],
    icons: ["heart", "entertainment"],
    status: "Requested",
  },
];

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
        {connectors.map((connector) => (
          <ConnectorCard connector={connector} />
        ))}
      </SimpleGrid>
      <RequestConnectors />
    </>
  );
};
export default ConnectorCardList;
