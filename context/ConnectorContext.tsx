import {Connector,ConnectorAtt} from "@/@types/types";
import { createContext, useState } from "react";
import { ReactNode } from "react";


const connectors = [
    {
      name: "sleep",
      text: "Understand sleep pattern, habits and influences with this broad set of sleep related ",
      tags: ["Health and Fitness"],
      icons: ["sleep"],
      status: "Requested",
    },
    {
      name: "oura",
      text: "Prifina user data set which contains data attributes retreived from Oura ring. ",
      tags: ["Health and Fitness"],
      icons: ["sleep"],
      status: "Live",
    },
    {
      name: "routePurchaseRate",
      text: "Compare historical purchace data, location and GPS and ratings data. ",
      tags: ["Health and Fitness", "Entertainment", "Finance"],
      icons: ["finance", "star", "location"],
      status: "Requested",
    },
    {
      name: "gpsNetflix",
      text: "Prifina Netflix data crossed with location history. ",
      tags: ["Health and Fitness", "Entertainment"],
      icons: ["location", "entertainment"],
      status: "Live",
    },
    {
      name: "mediaVitals",
      text: "Vital health data attributes combined with viewing history data from a variety of sources.",
      tags: [
        "Health and Fitness",
        "Location and Navigation",
        "small",
        "this tag should be hidden",
        "this tag should be hidden",
      ],
      icons: ["heart", "entertainment"],
      status: "Requested",
    },
  ];

const ConnectorAttributes = [
{
    dataCatagory: "Health",
    prifinaAttribute: "HRV_5_rmssd",
    attributeDescription:
    "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
    usersWithThis: "4152",
},
{
    dataCatagory: "Health",
    prifinaAttribute: "HRV_rmssd",
    attributeDescription: "The average HRV calculated with rMSSD method.",
    usersWithThis: "8013",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Hypno_5",
    attributeDescription:
    "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
    usersWithThis: "9359",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_align",
    attributeDescription:
    "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
    usersWithThis: "8861",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_align",
    attributeDescription:
    "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
    usersWithThis: "8861",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_disturb",
    attributeDescription:
    "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
    usersWithThis: "1439",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_lat",
    attributeDescription:
    "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
    usersWithThis: "1148",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_eff",
    attributeDescription:
    "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
    usersWithThis: "9374",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_N3",
    attributeDescription:
    "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
    usersWithThis: "3536",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_N3",
    attributeDescription:
    "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
    usersWithThis: "3536",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_TOT",
    attributeDescription:
    "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
    usersWithThis: "5028",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_rem",
    attributeDescription:
    "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
    usersWithThis: "4600",
},
{
    dataCatagory: "Health",
    prifinaAttribute: "HRV_5_rmssd",
    attributeDescription:
    "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
    usersWithThis: "4152",
},
{
    dataCatagory: "Health",
    prifinaAttribute: "HRV_rmssd",
    attributeDescription: "The average HRV calculated with rMSSD method.",
    usersWithThis: "8013",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Hypno_5",
    attributeDescription:
    "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
    usersWithThis: "9359",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_align",
    attributeDescription:
    "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
    usersWithThis: "8861",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_disturb",
    attributeDescription:
    "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
    usersWithThis: "1439",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_lat",
    attributeDescription:
    "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
    usersWithThis: "1148",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_eff",
    attributeDescription:
    "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
    usersWithThis: "9374",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_N3",
    attributeDescription:
    "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
    usersWithThis: "3536",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_TOT",
    attributeDescription:
    "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
    usersWithThis: "5028",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_TOT",
    attributeDescription:
    "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
    usersWithThis: "5028",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_rem",
    attributeDescription:
    "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
    usersWithThis: "4600",
},
{
    dataCatagory: "Health",
    prifinaAttribute: "HRV_5_rmssd",
    attributeDescription:
    "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
    usersWithThis: "4152",
},
{
    dataCatagory: "Health",
    prifinaAttribute: "HRV_rmssd",
    attributeDescription: "The average HRV calculated with rMSSD method.",
    usersWithThis: "8013",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Hypno_5",
    attributeDescription:
    "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
    usersWithThis: "9359",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_align",
    attributeDescription:
    "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
    usersWithThis: "8861",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_disturb",
    attributeDescription:
    "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
    usersWithThis: "1439",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_lat",
    attributeDescription:
    "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
    usersWithThis: "1148",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_eff",
    attributeDescription:
    "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
    usersWithThis: "9374",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_N3",
    attributeDescription:
    "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
    usersWithThis: "3536",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_TOT",
    attributeDescription:
    "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
    usersWithThis: "5028",
},
{
    dataCatagory: "Sleep",
    prifinaAttribute: "Ourascr_rem",
    attributeDescription:
    "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
    usersWithThis: "4600",
},
];

  export const getStaticPaths = async () => {
    console.log("getStaticPaths connector")
    
    let idPaths = connectors.map((item) => ({
      params: {
        connector: item.name.toString().toLowerCase().trim().replace(/ /g, "-"),
      },
    }));
    console.log("connector paths",idPaths);
    return {
      paths: idPaths,
      fallback: false,
    };
  };
  

  export async function getStaticProps({ params }: { params: { source: string} }) {//{ params =""}: any
    console.log("getStaticProps connectors",params);
    
  
    return {
      props: {
        results: connectors,
        attributes: ConnectorAttributes,
      },
      // revalidate: 86400, // 24h In seconds
    };
  }


  const ConnectorContext = createContext<any>({});

  
interface Props {
    children?: ReactNode;
    results: Connector[];
    attributes: ConnectorAtt[];
    // any props that come into the component
  }

  export function ConnectorProvider({ children, results, attributes }: Props) {
    const [connectors, setConnectors] = useState<Connector[]>(results)

    const handleConnectors = () =>{
        setConnectors(results)
    }
    return (
        <ConnectorContext.Provider value={{attributes,connectors,handleConnectors}}>
          {children}
        </ConnectorContext.Provider>
      );
  }


  export default ConnectorContext;