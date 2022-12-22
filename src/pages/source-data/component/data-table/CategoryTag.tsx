import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  name: string;
}

function CategoryTag({ name }: Props) {
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  useEffect(() => {
    if (name === "Sleep") {
      setColor("#B593FF");
      setBorderColor("#B593FF");
      setBgColor("#FFFFFF00");
    }
    if (name === "Health") {
      setColor("#F9AEA9");
      setBorderColor("#F9AEA9");
      setBgColor("#FFFFFF00");
    }
    if (name === "Blogging") {
      setColor("bgItem");
      setBorderColor("#F9D4A9");
      setBgColor("#F9D4A9");
    }
    if (name === "Calenders") {
      setColor("bgItem");
      setBorderColor("#F9F1A9");
      setBgColor("#F9F1A9");
    }
    if (name === "Clocks") {
      setColor("bgItem");
      setBorderColor("#DAF9A9");
      setBgColor("#DAF9A9");
    }
    if (name === "Cloud storage") {
      setColor("bgItem");
      setBorderColor("#AAF9A9");
      setBgColor("#AAF9A9");
    }
    if (name === "Location") {
      setColor("#A9F9C9");
      setBorderColor("#A9F9C9");
      setBgColor("#FFFFFF00");
    }
    if (name === "Entertainment") {
      setColor("bgItem");
      setBorderColor("#93D8FF");
      setBgColor("#93D8FF");
    }
    if (name === "Finance") {
      setColor("bgItem");
      setBorderColor("#93B1FF");
      setBgColor("#93B1FF");
    }
    if (name === "Games") {
      setColor("bgItem");
      setBorderColor("#9593FF");
      setBgColor("#9593FF");
    }
    if (name === "Location and Navigation") {
      setColor("bgItem");
      setBorderColor("#CF93FF");
      setBgColor("#CF93FF");
    }
    if (name === "Security") {
      setColor("bgItem");
      setBorderColor("#E393FF");
      setBgColor("#E393FF");
    }
    if (name === "Smart Home") {
      setColor("bgItem");
      setBorderColor("#FF93FB");
      setBgColor("#FF93FB");
    }
    if (name === "Social Media") {
      setColor("bgItem");
      setBorderColor("#FF93A6");
      setBgColor("#FF93A6");
    }
    if (name === "Travel") {
      setColor("bgItem");
      setBorderColor("#FFAD93");
      setBgColor("#FFAD93");
    }
    if (name === "Communication") {
      setColor("#FFE193");
      setBorderColor("#FFE193");
      setBgColor("#FFFFFF00");
    }
  }, [name]);
  return (
    <Text
      textAlign={"center"}
      borderRadius={"full"}
      color={color}
      bg={bgColor}
      borderColor={borderColor}
      border={"1px"}
      py={0.5}
      px={2}
      fontWeight={600}
      noOfLines={1}
    >
      {name}
    </Text>
  );
}
export default CategoryTag;
