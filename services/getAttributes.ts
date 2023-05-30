const { Client } = require("@notionhq/client");

export const  getAttributes = async (id:string)=>{

    const notionSecret = process.env.NOTION_SECRET;
    const notionAttributes = process.env.NOTION_ATTRIBUTES_ID;

    if( !notionSecret|| !notionAttributes){
        throw Error("Must define NOTION_SECRET and NOTION_Attributes_ID in your envirment ")
    }

    const notion = new Client({
        auth: notionSecret,
      });

    let res = [];
  let query = await notion.databases.query({
    database_id: notionAttributes,
    
      filter: {
        property: "Sources",
        rollup: {
          any: {
            relation: {
              contains: id,
            },
          },
        },
      },
  });

  res = [...query.results];

  while (query.has_more) {
    query = await notion.databases.query({
      database_id: notionAttributes,
      filter: {
        property: 'Sources',
        rollup: {
            any:{
                relation:{
                    contains: id,
                }
            }
        },
      },
      start_cursor: query.next_cursor,
    });
    res = [...res, ...query.results];
  }
  const data = res.length ? res.map((item) => item.properties).map((item:any)=> {
    return {
        attributeName:item["Attribute Name"]?.title[0]?.plain_text || "need title",
        attributeDescription:item["Attribute description"]?.rich_text[0]?.plain_text || "Coming Soon ...",
        ObjectsUsingThis: item["Object(s) using this"]?.relation || []

    }
  }) : []

  console.log("get att data",data)

  return data
}
