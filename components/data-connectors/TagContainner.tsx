import { Button, Flex } from "@chakra-ui/react";
import { ReactNode, useRef, useEffect, useState } from "react";
import ConnectorTag from "./ConnectorTag";

interface Props {
  tags?: string[];
  // any props that come into the component
}

const TagContainner = ({ tags }: Props) => {
  const [more, setMore] = useState(-1);
  const [visibleTags, setVisibleTags] = useState([...(tags || [])]);
  const refContainer = useRef<any>();

  const removeTag = () => {
    const elements = [...(tags || [])];
    if (more > 0) {
      elements.splice(elements.length - more);
      elements.push(`+${more}`);
    }
    setVisibleTags(elements);
  };

  useEffect(() => {
    if (refContainer.current.scrollHeight > refContainer.current.clientHeight) {
      setMore((prev) => prev + 1);
      removeTag();
    }
  });

  return (
    <Flex
      ref={refContainer}
      gap={1}
      h={"56px"}
      overflowY={"hidden"}
      justifyContent={"left"}
      alignItems={"end"}
      wrap={"wrap"}
    >
      {visibleTags &&
        visibleTags.map((tag, idx) => <ConnectorTag key={idx} text={tag} />)}
    </Flex>
  );
};
export default TagContainner;
