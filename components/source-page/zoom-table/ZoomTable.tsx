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

  const zoomAttributes = filtred.dataObjectsNames
    .split(",")
    .map((item: string, idx: number) => {
      if (item !== "") {
        return {
          objectName: item,
          Objectid: filtred.dataObjects[idx]?.id,
          att: attributes.filter((item: any) =>
            item.ObjectsUsingThis.find(
              (obj: any) =>
                obj.id === filtred.dataObjects[idx]?.id
            )
          ),
        };
      }
    });

  console.log(zoomAttributes);

  useEffect(() => {
    const arr = zoomAttributes.slice(startRange - 1, endRange);
    setAttributesRange(arr);
  }, [rows, startRange]);

  useEffect(() => {
    setStartRange(1);
    setEndRange(rows);
    const arr = zoomAttributes.slice(0, rows);
    setAttributesRange(arr);
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
      {attributesRange[0] &&
        attributesRange.map((attribute, idx) => (
          <ZoomRow key={idx} attribute={attribute} />
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
