import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  category: string;
}

const Breadcrumbs = ({ name, category }: Props) => {
  const navigate = useNavigate();

  return (
    <Flex alignItems={"center"} color={"breadcrumb"}>
      <Icon
        as={IoArrowBack}
        fontSize={"3xl"}
        mr={10}
        color={"whiteText"}
        onClick={() => navigate("/data-connectors")}
        _hover={{ cursor: "pointer" }}
      />
      <Text noOfLines={1}>Data Connectors</Text>
      <Icon as={IoChevronForward} />
      <Text noOfLines={1}>Health and Fitness</Text>
      <Icon as={IoChevronForward} />
      <Text color={"whiteText"}>{name}</Text>
    </Flex>
  );
};
export default Breadcrumbs;
