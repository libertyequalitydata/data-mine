import {
  HStack,
  Button,
  chakra,
  Box,
  Flex,
  useDisclosure,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { useRef } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef<HTMLDivElement>();
  return (
    <Box as="header" bg="bgDark" width={"full"} position={"fixed"} zIndex={100}>
      <HStack
        justifyContent={"space-between"}
        px={[2, 4, 4, 16]}
        py={4}
        // maxW={"container.xl"}
        width={"full"}
        m="auto"
      >
        <chakra.img src="logo.png" />
        <IconButton
          variant={"square"}
          fontSize={"2xl"}
          minW={"fit-content"}
          onClick={onOpen}
          aria-label="Menu"
          icon={<IoMenu />}
          display={["block", "block", "block", "block", "none"]}
        />

        <MobileMenu onClose={onClose} isOpen={isOpen} />

        <Flex
          as={"nav"}
          gap={5}
          display={["none", "none", "none", "none", "flex"]}
        >
          <Button variant="square">PLATFORM</Button>
          <Button variant="square" border="1px">
            DATA MINE
          </Button>
          <Button variant="square">YOUR DATA</Button>
          <Button variant="square">SLACK</Button>
        </Flex>
      </HStack>
    </Box>
  );
};
export default Header;
