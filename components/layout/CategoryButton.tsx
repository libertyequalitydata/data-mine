import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

interface Props {
  category: string;
}
export function CategoryButton({ category }: Props) {
  const { selectedCategory, setSelectedCategory } = useContext(DataContext);
  return (
    <Button
      key={category}
      variant={"select"}
      fontWeight={"400"}
      border={selectedCategory.includes(category) ? "2px" : "none"}
      onClick={() => {
        if (category !== "All") {
          const idx = selectedCategory.indexOf(category);
          const arr = selectedCategory.filter((item: string) => item !== "All");
          if (idx === -1) {
            arr.push(category);
            setSelectedCategory(arr);
          } else {
            arr.splice(idx, 1);
            if (arr.length === 0) {
              setSelectedCategory(["All"]);
            } else setSelectedCategory(arr);
          }
        }
        if (category === "All" || selectedCategory.length === 0) {
          setSelectedCategory(["All"]);
        }
      }}
    >
      {category}
    </Button>
  );
}
