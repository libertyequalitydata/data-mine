const { Client } = require("@notionhq/client");
import { DataSource } from "@/@types/types";

export const  getDataSources = async ()=>{

    const notionSecret = process.env.NOTION_SECRET;
    const notionDataSourcesId = process.env.NOTION_DATASOURCES_ID;

    if( !notionSecret|| !notionDataSourcesId){
        throw Error("Must define NOTION_SECRET and NOTION_DATASOURCES_ID in your envirment ")
    }

    const notion = new Client({
        auth: notionSecret,
      });

    let res = [];

  let query = await notion.databases.query({
    database_id: notionDataSourcesId,
  });

  res = [...query.results];

  while (query.has_more) {
    query = await notion.databases.query({
      database_id: notionDataSourcesId,
      start_cursor: query.next_cursor,
    });
    res = [...res, ...query.results];
  }
  const data = res.map((item) => item.properties).map((item:any)=> {
    return {
        notionId:item.Source_id?.formula.string || "",
        name:item.Name?.title[0]?.plain_text || "need title",
        categories:item.Categories?.multi_select.map((item:any) => item.name )|| ["Appliances"],
        isDynamic:item["Dynamic Data"]?.relation[0]?.id ? true : false,
        status:item.Status_?.select ? item.Status_.select.name : "Requested" ,
        description:item.Description?.rich_text[0]?.plain_text || "Coming Soon ...",
        documentationUrl:item["Source docs URL"]?.url || "Not Available",
        apiUrl:item["Source docs URL"]?.url || "Not Available",
        relatedApps:item.relatedApps?.formula.string || "",
        dataObjectsNames: item.dataObjectsNames.formula.string || "",
        dataObjects: item["Data Objects (All)"].relation || [],
    }
  })

  return data
}
