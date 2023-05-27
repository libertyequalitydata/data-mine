import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

interface Props {
  name: string;
  category: string;
}

const BreadCrumbs = ({ name, category }: Props) => {
  const router = useRouter();

  return (
    <Flex
      alignItems={"center"}
      color={"breadcrumb"}
      fontSize={["14px", "16px"]}
      flexWrap={["wrap", "wrap", "nowrap"]}
    >
      <Icon
        as={IoArrowBack}
        fontSize={"3xl"}
        mr={[4, 4, 10]}
        color={"whiteText"}
        onClick={() => router.push("/data-sources")}
        _hover={{ cursor: "pointer" }}
        boxSize={[6, 10]}
      />
      <Text noOfLines={1}>Data Source</Text>
      <Icon as={IoChevronForward} />
      <Text noOfLines={1}>{category}</Text>
      <Icon as={IoChevronForward} />
      <Text noOfLines={1} color={"whiteText"}>
        {name}
      </Text>
    </Flex>
  );
};
export default BreadCrumbs;
