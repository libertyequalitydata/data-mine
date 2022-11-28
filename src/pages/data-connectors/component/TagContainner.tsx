import { Button, Flex } from "@chakra-ui/react";
import { ReactNode, useRef, useEffect, useState } from "react";
import ConnectorTag from "./ConnectorTag";

interface Props {
  tags?: string[];
  // any props that come into the component
}

const TagContainner = ({ tags }: Props) => {
  const [overflow, setOverFlow] = useState(false);
  const [visibleTags, setVisibleTags] = useState<string[]>([]);
  const refContainer = useRef<any>();

  useEffect(() => {
    if (tags) {
      if (
        refContainer.current.scrollHeight > refContainer.current.clientHeight
      ) {
        setOverFlow(true);
        const elements = [];
        for (let i = 0; i < elements.length; i++) {
          elements.push(tags[i]);
          console.log(tags);
        }
        setVisibleTags(elements);
      } else setVisibleTags(tags);
    }

    console.log(refContainer.current.children.length);
  }, [tags]);

  return (
    <Flex
      ref={refContainer}
      gap={2}
      h={"96px"}
      overflowY={"hidden"}
      justifyContent={"left"}
      alignItems={"flex-end"}
      wrap={"wrap"}
    >
      {visibleTags &&
        visibleTags.map((tag) => <ConnectorTag key={tag} text={tag} />)}
    </Flex>
  );
};
export default TagContainner;
