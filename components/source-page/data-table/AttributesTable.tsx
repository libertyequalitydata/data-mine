"use client";

import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

interface Props {
  attributes: any;
}

export const AttributesTable = ({ attributes }: Props) => {
  const [rows, setRows] = useState(10);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(rows);
  const [attributesRange, setAttributesRange] = useState<any[]>([]);

  useEffect(() => {
    const arr = attributes.slice(startRange - 1, endRange);
    setAttributesRange(arr);
  }, [rows, startRange]);

  useEffect(() => {
    // console.log("called attributes", attributes);

    setStartRange(1);
    setEndRange(rows);
    const arr = attributes.slice(0, rows);
    setAttributesRange(arr);
  }, [attributes]);
  return (
    
    <Grid
      gridTemplateColumns={{
        base: "1fr 1fr",
        lg: "1fr 1fr minmax(auto, 540px) 1fr",
      }}
      width={"full"}
      bg={"bgItemD"}
      fontSize={"12px"}
      shadow={"xs"}
    >
      <TableHead />
      {attributesRange.map((attribute: any, idx: number) => (
        <TableRow key={idx} attribute={attribute} />
      ))}
      <TableFooter
        rows={rows}
        setRows={setRows}
        startRange={startRange}
        setStartRange={setStartRange}
        endRange={endRange}
        setEndRange={setEndRange}
        attributes={attributes}
      />
    </Grid>
  );
};
