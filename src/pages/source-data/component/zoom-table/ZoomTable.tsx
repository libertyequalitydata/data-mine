import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import ZoomFooter from "./ZoomFooter";
import ZoomHead from "./ZoomHead";
import ZoomRow from "./ZoomRow";

interface Props {
  attributes: any;
  filtred: any;
}

export const ZoomTable = ({ attributes, filtred }: Props) => {
  // const [zoomAttributes, setZoomAttributes] = useState<any[]>([]);
  const [rows, setRows] = useState(10);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(rows);
  const [attributesRange, setAttributesRange] = useState<any[]>([]);

  const zoomAttributes = filtred.dataObjectsNames.formula.string
    .split(",")
    .map((item: string, idx: number) => {
      return {
        objectName: item,
        Objectid: filtred["Data Objects (All)"].relation[idx].id,
        att: attributes.filter((item: any) =>
          item.properties["Object(s) using this"].relation.find(
            (obj: any) =>
              obj.id === filtred["Data Objects (All)"].relation[idx].id
          )
        ),
      };
    });

  useEffect(() => {
    const arr = zoomAttributes.slice(startRange - 1, endRange);
    setAttributesRange(arr);
  }, [rows, startRange]);

  useEffect(() => {
    setStartRange(1);
    setEndRange(rows);
    const arr = zoomAttributes.slice(0, rows);
    setAttributesRange(arr);
    console.log(zoomAttributes);
  }, [attributes]);

  return (
    <Grid
      gridTemplateColumns={"min-content 1fr 1fr 1fr min-content"}
      width={"full"}
      bg={"bgItemD"}
      fontSize={"12px"}
      shadow={"xs"}
    >
      <ZoomHead />
      {attributesRange.map((attribute) => (
        <ZoomRow attribute={attribute} />
      ))}
      <ZoomFooter
        rows={rows}
        setRows={setRows}
        startRange={startRange}
        setStartRange={setStartRange}
        endRange={endRange}
        setEndRange={setEndRange}
        attributes={zoomAttributes}
      />
    </Grid>
  );
};
