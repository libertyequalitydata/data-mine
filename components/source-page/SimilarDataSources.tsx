"use client";

import DataContext from "@/context/DataContext";
import DataCard from "../data-sources/DataCard";
import { useState, useContext, useEffect, useRef } from "react";
import { Flex, Icon, IconButton, VStack } from "@chakra-ui/react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { DataSource } from "@/@types/types";

interface Props {
  category: string;
}

const SimilarDataSources = ({ category }: Props) => {
  const [scrollX, setScrollX] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const refScroll = useRef<any>();

  const { dataSources } = useContext(DataContext);

  const similarDataSources =
    [...dataSources].filter((source: DataSource) =>
      source.categories.find((cat: string) => cat === category)
    ) || [];

  useEffect(() => {
    if (
      refScroll.current.scrollWidth - refScroll.current.clientWidth >
      scrollX
    ) {
      setIsScroll(true);
    } else setIsScroll(false);
  });

  return (
    <Flex
      width={"full"}
      position={"relative"}
      onTouchEnd={() => {
        setScrollX(refScroll.current.scrollLeft);
      }}
    >
      <VStack
        position={"absolute"}
        top={0}
        right={0}
        width={"20%"}
        height={"full"}
        bgGradient="linear(to-l, bgLight 10%, #00000001)"
        justify={"center"}
        align={"end"}
        display={isScroll ? "flex" : "none"}
        zIndex={200}
      >
        <IconButton
          borderRadius={"full"}
          aria-label="scroll"
          icon={<Icon as={IoChevronForward} />}
          onClick={() => {
            const scroll = refScroll.current.scrollLeft + 200;
            setScrollX(scroll);
            refScroll.current.scrollLeft += 200;
          }}
        />
      </VStack>
      <VStack
        position={"absolute"}
        top={0}
        left={0}
        width={"20%"}
        height={"full"}
        bgGradient="linear(to-r, bgLight 10%, #00000001)"
        justify={"center"}
        align={"start"}
        display={scrollX > 0 ? "flex" : "none"}
        zIndex={200}
      >
        <IconButton
          borderRadius={"full"}
          aria-label="scroll"
          icon={<Icon as={IoChevronBack} />}
          onClick={() => {
            const scroll = refScroll.current.scrollLeft - 200;
            setScrollX(scroll);

            refScroll.current.scrollLeft -= 200;
          }}
        />
      </VStack>
      <Flex
        ref={refScroll}
        gap={8}
        overflowX={"scroll"}
        p={2}
        pr={20}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {similarDataSources &&
          similarDataSources.map((item: DataSource, idx: number) => (
            <DataCard
              key={idx}
              name={item.name}
              status={item.status}
              isDynamic={item.isDynamic}
            />
          ))}
      </Flex>
    </Flex>
  );
};
export default SimilarDataSources;
