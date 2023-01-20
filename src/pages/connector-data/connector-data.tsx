import { Heading, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./component/Breadcrumbs";
import DataAttributes from "./component/DataAttributes";
import Description from "./component/Description";
import Info from "./component/Info";

const ConnectorData = () => {
  const param = useParams();

  return (
    <VStack alignItems={"start"} py={8} px={[4, 6, 10, 10, 12, 20]}>
      <Breadcrumbs name={param.name || ""} category={"category"} />
      <Heading color={"whiteText"} pl={20} pb={14}>
        {param.name}
      </Heading>
      <VStack
        alignItems={"start"}
        width={"full"}
        px={{ base: 0, xl: 20 }}
        spacing={14}
      >
        <Description name={param.name || ""} />
        <Info />
        <DataAttributes />
      </VStack>
    </VStack>
  );
};
export default ConnectorData;
