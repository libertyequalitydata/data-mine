import { Center, Flex, HStack, Skeleton, Text, VStack } from "@chakra-ui/react";
// import { fetchData } from "../../../utils/fetcher";
import { AttributesTable } from "./data-table/AttributesTable";
import { useContext, useEffect, useRef, useState } from "react";
import AttributesMenu from "./AttributesMenu";
import { ZoomTable } from "./zoom-table/ZoomTable";
import LoadingAttributes from "./LoadingAttributes";
import DataContext from "@/context/DataContext";

interface Props {
  sourceID: string;
  filtred: any;
}

const DataAttributes = ({ sourceID, filtred }: Props) => {
  const mounted = useRef(true);
  const [attributes, setAttributes] = useState<any>(null);
  const [zoom, setZoom] = useState<boolean>(false);

  const { attributes: atts } = useContext(DataContext);
  useEffect(()=>{
    setAttributes(atts)
  },[atts.length])
  // console.log("fetched attributes",atts);

  return (
    <VStack width={"full"} alignItems={"start"} color={"whiteText"}>
      <AttributesMenu zoom={zoom} setZoom={setZoom} />
      <Flex fontSize={"lg"} p={4} pt={0} gap={2}>
        {attributes == null && <Text>Loading Data Attributes ... </Text>}

        {(attributes && attributes[0]) && (
          <>
            <Text>Data Attributes</Text>
            <Text color={"primary"}>({attributes.length})</Text>
          </>
        )}
        {(attributes && !attributes[0]) && <Text>No Data Attributes Availabale</Text>}
      </Flex>

      <Center bg={"bgItem"} px={4} py={2} w={"full"}>
        {/* loading table */}
        {attributes == null && <LoadingAttributes />}
        {/* attributes table */}
        {attributes && !zoom && <AttributesTable attributes={attributes} />}
        {/* zoom table */}
        {attributes && zoom && <ZoomTable attributes={attributes} filtred={filtred} />}
      </Center>
    </VStack>
  );
};
export default DataAttributes;
