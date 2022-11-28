import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  // any props that come into the component
}

const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={"bgLight"} color={"whiteText"}>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody pb={12}>
          <VStack spacing={6}>
            <Button variant="square">PLATFORM</Button>
            <Button variant="square" border="1px">
              DATA MINE
            </Button>
            <Button variant="square">YOUR DATA</Button>
            <Button variant="square">SLACK</Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default MobileMenu;
