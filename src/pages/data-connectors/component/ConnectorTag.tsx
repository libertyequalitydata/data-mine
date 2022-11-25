import { Button } from "@chakra-ui/react";
interface props {
  text: string;
}

const ConnectorTag = ({ text }: props) => {
  return (
    <Button
      bg={"subTag"}
      px={"4"}
      borderRadius={"full"}
      fontWeight={700}
      color={"bgItem"}
    >
      {text}
    </Button>
  );
};
export default ConnectorTag;
