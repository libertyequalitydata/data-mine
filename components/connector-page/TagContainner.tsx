import { Flex } from "@chakra-ui/react";
import ConnectorTag from "./ConnectorTag";

interface Props {
  tags?: string[];
  // any props that come into the component
}

const TagContainner = ({ tags }: Props) => {
  return (
    <Flex gap={2} maxW={"500px"} justifyContent={"left"} wrap={"wrap"}>
      {tags && tags.map((tag, idx) => <ConnectorTag key={idx} text={tag} />)}
    </Flex>
  );
};
export default TagContainner;
