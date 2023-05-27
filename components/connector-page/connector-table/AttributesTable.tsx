import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useContext } from "react";
import ConnectorContext from "@/context/ConnectorContext"
import {ConnectorAtt} from "@/@types/types"
import { useRouter } from "next/router";

// const attributes = [
//   {
//     dataCatagory: "Health",
//     prifinaAttribute: "HRV_5_rmssd",
//     attributeDescription:
//       "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
//     usersWithThis: "4152",
//   },
//   {
//     dataCatagory: "Health",
//     prifinaAttribute: "HRV_rmssd",
//     attributeDescription: "The average HRV calculated with rMSSD method.",
//     usersWithThis: "8013",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Hypno_5",
//     attributeDescription:
//       "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
//     usersWithThis: "9359",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_align",
//     attributeDescription:
//       "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
//     usersWithThis: "8861",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_align",
//     attributeDescription:
//       "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
//     usersWithThis: "8861",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_disturb",
//     attributeDescription:
//       "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
//     usersWithThis: "1439",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_lat",
//     attributeDescription:
//       "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
//     usersWithThis: "1148",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_eff",
//     attributeDescription:
//       "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
//     usersWithThis: "9374",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_N3",
//     attributeDescription:
//       "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
//     usersWithThis: "3536",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_N3",
//     attributeDescription:
//       "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
//     usersWithThis: "3536",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_TOT",
//     attributeDescription:
//       "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
//     usersWithThis: "5028",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_rem",
//     attributeDescription:
//       "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
//     usersWithThis: "4600",
//   },
//   {
//     dataCatagory: "Health",
//     prifinaAttribute: "HRV_5_rmssd",
//     attributeDescription:
//       "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
//     usersWithThis: "4152",
//   },
//   {
//     dataCatagory: "Health",
//     prifinaAttribute: "HRV_rmssd",
//     attributeDescription: "The average HRV calculated with rMSSD method.",
//     usersWithThis: "8013",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Hypno_5",
//     attributeDescription:
//       "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
//     usersWithThis: "9359",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_align",
//     attributeDescription:
//       "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
//     usersWithThis: "8861",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_disturb",
//     attributeDescription:
//       "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
//     usersWithThis: "1439",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_lat",
//     attributeDescription:
//       "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
//     usersWithThis: "1148",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_eff",
//     attributeDescription:
//       "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
//     usersWithThis: "9374",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_N3",
//     attributeDescription:
//       "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
//     usersWithThis: "3536",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_TOT",
//     attributeDescription:
//       "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
//     usersWithThis: "5028",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_TOT",
//     attributeDescription:
//       "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
//     usersWithThis: "5028",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_rem",
//     attributeDescription:
//       "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
//     usersWithThis: "4600",
//   },
//   {
//     dataCatagory: "Health",
//     prifinaAttribute: "HRV_5_rmssd",
//     attributeDescription:
//       "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
//     usersWithThis: "4152",
//   },
//   {
//     dataCatagory: "Health",
//     prifinaAttribute: "HRV_rmssd",
//     attributeDescription: "The average HRV calculated with rMSSD method.",
//     usersWithThis: "8013",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Hypno_5",
//     attributeDescription:
//       "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
//     usersWithThis: "9359",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_align",
//     attributeDescription:
//       "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
//     usersWithThis: "8861",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_disturb",
//     attributeDescription:
//       "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
//     usersWithThis: "1439",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_lat",
//     attributeDescription:
//       "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
//     usersWithThis: "1148",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_eff",
//     attributeDescription:
//       "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
//     usersWithThis: "9374",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_N3",
//     attributeDescription:
//       "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
//     usersWithThis: "3536",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_TOT",
//     attributeDescription:
//       "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
//     usersWithThis: "5028",
//   },
//   {
//     dataCatagory: "Sleep",
//     prifinaAttribute: "Ourascr_rem",
//     attributeDescription:
//       "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
//     usersWithThis: "4600",
//   },
// ];



export const AttributesTable = () => {
  const [rows, setRows] = useState(10);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(rows);
  const [attributesRange, setAttributesRange] = useState<any[]>([]);

  const route = useRouter();
const {attributes} = useContext(ConnectorContext)

  useEffect(() => {
    const arr = attributes?.slice(startRange - 1, endRange);
    setAttributesRange(arr);
  }, [rows, startRange]);

  useEffect(() => {
    setStartRange(1);
    setEndRange(rows);
    const arr = attributes.slice(0, rows);
    setAttributesRange(arr);
  }, [route.asPath]);

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr 1fr",
        lg: "1fr 1fr minmax(auto, 540px) 1fr",
      }}
      width={"full"}
      bg={"bgItemD"}
      fontSize={"12px"}
    >
      <TableHead />
      {attributesRange.map((attribute,idx) => (
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
