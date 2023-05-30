import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import DataContext from "@/context/DataContext";
import BreadCrumbs from "@/components/source-page/BreadCrumbs";
import DataAttributes from "@/components/source-page/DataAttributes";
import Description from "@/components/source-page/Description";
import IsDynamic from "@/components/source-page/IsDynamic";
import Links from "@/components/source-page/Links";
import RelatedApps from "@/components/source-page/RelatedApps";
import SimilarDataSources from "@/components/source-page/SimilarDataSources";
import { useRouter } from "next/router";
import { DataSource } from "@/@types/types";

export { getStaticPaths } from "@/context/DataContext";
export { getStaticProps } from "@/context/DataContext";

const SourceData = () => {
  const route = useRouter();
  const [filtred, setFiltred] = useState<DataSource>();
  const [filtering, setFiltering] = useState(false);
  const { categories, handleDataSources, handleCategories, dataSources } =
    useContext(DataContext);

  useEffect(() => {
    handleDataSources();
  }, []);

  useEffect(() => {
    handleCategories();

    console.log("source path", route.asPath);

    const val = dataSources.find((item: any) => {
      return route.asPath
        .replace("%E2%84%A2", "™")
        .includes(item.name.toLowerCase().trim().replace(/ /g, "-"));
    });
    setFiltred(val);
  }, [dataSources, route.asPath]);

  // console.log("filtred",filtred);

  return categories ? (
    filtred ? (
      <VStack alignItems={"start"} py={8} px={[2, 4, 10, 10, 12, 20]}>
        <BreadCrumbs name={filtred.name} category={filtred.categories[0]} />
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
            {filtred.name}
          </Heading>
          <IsDynamic dynamic={filtred.isDynamic} />
        </Flex>
        <VStack
          alignItems={"start"}
          width={"full"}
          px={{ base: 0, xl: 20 }}
          spacing={20}
        >
          <Description name={filtred.name} description={filtred.description} />
          <Links docs={filtred.documentationUrl} api={filtred.apiUrl} />

          <DataAttributes
            sourceID={filtred.notionId}
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

          <RelatedApps relatedApps={filtred.relatedApps} />

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

              <SimilarDataSources category={filtred.categories[0]} />
            </>
          )}
        </VStack>
      </VStack>
    ) : (
      <Text color={"whiteText"} p={4}>
        Loading ...
      </Text>
    )
  ) : null;
};
export default SourceData;
