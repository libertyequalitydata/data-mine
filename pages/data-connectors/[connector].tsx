import { Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/connector-page/BreadCrumbs";
import DataAttributes from "@/components/connector-page/DataAttributes";
import Description from "@/components/connector-page/Description";
import Info from "@/components/connector-page/Info";
import { useContext, useEffect } from "react";
import ConnectorContext from "@/context/ConnectorContext";
import { Connector } from "@/@types/types";


export { getStaticPaths } from "@/context/ConnectorContext";
export { getStaticProps } from "@/context/ConnectorContext";

const ConnectorData = () => {
  const route = useRouter();
  // const connectorName = route.asPath.split("/")[2]
  const {handleConnectors,connectors} = useContext(ConnectorContext)
  // let connector :Connector 

  let connector = connectors.find((item: any) =>{
    return route.asPath.includes(item.name.toLowerCase().trim().replace(/ /g, "-"))
  })

  useEffect(() => {
    handleConnectors();
  }, []);

  useEffect(() => {
    handleConnectors();
    let connector = connectors.find((item: any) =>{
      return route.asPath.includes(item.name.toLowerCase().trim().replace(/ /g, "-"))
    }
    );
  }, [connectors, route.asPath]);

  return (
    <VStack alignItems={"start"} py={8} px={[4, 6, 10, 10, 12, 20]}>
      <Breadcrumbs name={ connector.name || ""} category={"category"} />
      <Heading color={"whiteText"} pl={20} pb={14}>
        {connector.name}
      </Heading>
      <VStack
        alignItems={"start"}
        width={"full"}
        px={{ base: 0, xl: 20 }}
        spacing={14}
      >
        <Description name={connector.name || ""} />
        <Info />
        <DataAttributes />
        {/* {categories && (
      <>
        <Text
          color={"whiteText"}
          textAlign={"left"}
          width={"full"}
          fontSize={"24px"}
        >
          Similar Data Sources
        </Text>

        <SimilarDataSources category={category} />
      </>
    )} */}
      </VStack>
    </VStack>
  );
};
export default ConnectorData;
