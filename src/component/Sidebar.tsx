import { CategoryButton } from "./CategoryButton";
import { VStack, Button, Text } from "@chakra-ui/react";
import DataContext from "../contexts/DataContext";
import { useContext, useEffect } from "react";

const categories = [
  "All",
  "Appliances",
  "Blogging",
  "Calenders",
  "Clocks",
  "Cloud Storage",
  "Communication",
  "Entertainment",
  "Finance",
  "Games",
  "Health and Fitness",
  "Location and Navigation",
  "Security",
];

const Sidebar = () => {
  return (
    <VStack
      alignItems={"start"}
      bg={"bgItem"}
      p={"6"}
      mt={8}
      borderRadius={"8px"}
      display={{ base: "none", "2xl": "flex" }}
      position={"-webkit-sticky"}
      style={{
        zIndex: 80,
        position: "sticky",
        top: "80px",
      }}
    >
      <Text color={"whiteText"} fontSize="24px" textAlign={"left"}>
        Categories
      </Text>
      {categories.map((category: any) => (
        <CategoryButton category={category} />
      ))}
    </VStack>
  );
};
export default Sidebar;
