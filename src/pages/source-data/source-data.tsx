import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../contexts/DataContext";
import { fetchData } from "../../utils/fetcher";
import BreadCrumbs from "./component/BreadCrumbs";
import DataAttributes from "./component/DataAttributes";
import Description from "./component/Description";
import IsDynamic from "./component/IsDynamic";
import Links from "./component/Links";
import RelatedApps from "./component/RelatedApps";
import SimilarDataSources from "./component/SimilarDataSources";

const SourceData = () => {
  const param = useParams();
  const [filtred, setFiltred] = useState<any>(null);
  const { categories, handleDataSources, handleCategories, dataSources } =
    useContext(DataContext);

  // fetch data sources if for some reason the DataContext has no data
  const getDataSources = async () => {
    const data = await fetchData("/api/data-sources");
    handleDataSources(data);
  };

  useEffect(() => {
    if (dataSources) {
      const val = dataSources.find((item: any) =>
        item.Name.title[0].plain_text
          .toLowerCase()
          .trim()
          .replace(/ /g, "-")
          .includes(param.name)
      );
      setFiltred(val);
      console.log(filtred);
    } else {
      getDataSources();
    }
  }, [categories, param.name]);

  useEffect(() => {
    handleCategories();
  }, [dataSources]);

  console.log(filtred);

  const name = filtred?.Name.title[0].plain_text;
  const category = filtred?.Categories.multi_select[0].name;

  return categories ? (
    filtred ? (
      <VStack alignItems={"start"} py={8} px={[2, 4, 10, 10, 12, 20]}>
        <BreadCrumbs name={name} category={category} />
        <Flex
          gap={[2, 2, 6]}
          alignItems={"center"}
          justifyContent={["center", "center", "left"]}
          pl={{ base: 0, md: 20 }}
          pb={14}
          width={"full"}
          flexWrap={"wrap"}
          direction={["column", "column", "row"]}
        >
          <Heading
            textAlign={"center"}
            color={"whiteText"}
            fontSize={["24px", "36px"]}
          >
            {name}
          </Heading>
          <IsDynamic
            dynamic={filtred["Dynamic Data"].relation[0]?.id !== undefined}
          />
        </Flex>
        <VStack
          alignItems={"start"}
          width={"full"}
          px={{ base: 0, xl: 20 }}
          spacing={20}
        >
          <Description
            name={name}
            description={
              filtred?.Description.rich_text[0]?.plain_text || "Coming Soon ..."
            }
          />
          <Links
            docs={filtred?.["Source docs URL"].url || "Not Available"}
            api={"Not Available"}
          />

          <DataAttributes
            sourceID={filtred.Source_id.formula.string}
            filtred={filtred && filtred}
          />

          <Flex
            gap={2}
            alignItems={"center"}
            justifyContent={["center", "left"]}
            flexWrap={["wrap", "nowrap"]}
            width={"full"}
          >
            <Text color={"whiteText"} fontSize={"20px"} fontWeight={600}>
              Resources:
            </Text>
            <Link
              noOfLines={1}
              color={"linkText"}
              fontSize={"18px"}
              href={"https://www.prifina.com/blog"}
              isExternal
            >
              https://www.prifina.com/blog
            </Link>
          </Flex>

          {/* related apps */}

          <RelatedApps relatedApps={filtred?.relatedApps.formula.string} />

          {/* similar data sources */}
          {categories && (
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
          )}
        </VStack>
      </VStack>
    ) : (
      <Text color={"whiteText"} p={4}>
        Not Found
      </Text>
    )
  ) : (
    <Text color={"whiteText"} p={4}>
      Loading ...
    </Text>
  );
};
export default SourceData;
