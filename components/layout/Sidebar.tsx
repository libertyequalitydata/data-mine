import { CategoryButton } from "./CategoryButton";
import { VStack, Button, Text, Badge } from "@chakra-ui/react";
import DataContext from "../../context/DataContext";
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
  const { selectedCategory } = useContext(DataContext);

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
      <Badge
        top={10}
        right={8}
        colorScheme="green"
        height={"5"}
        width={"5"}
        borderRadius={"full"}
        zIndex="210"
        bg={"primary"}
        position={"absolute"}
        display={selectedCategory[0] === "All" ? "none" : "flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {selectedCategory.length}
      </Badge>
      <Text color={"whiteText"} fontSize="24px" textAlign={"left"}>
        Categories
      </Text>
      {categories.map((category: any, idx: number) => (
        <CategoryButton key={idx} category={category} />
      ))}
    </VStack>
  );
};
export default Sidebar;
