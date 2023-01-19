require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {Client} = require("@notionhq/client")




const notionSecret = process.env.NOTION_SECRET
const notionDataSourcesId = process.env.NOTION_DATASOURCES_ID
const notionDataConnectorsId = process.env.NOTION_DATACONNECTORS_ID
const notionAttributesId = process.env.NOTION_ATTRIBUTES_ID



if(!notionSecret || !notionDataSourcesId || !notionDataConnectorsId || !notionAttributesId){
    throw Error("Must define NOTION_SECRET and NOTION_DATASOURCES_ID and NOTION_DATAATTRIBUTES_ID in env")
}

const notion = new Client({
    auth: notionSecret,
})


const app = express()

// we need to change this for better security
app.use(cors())
app.set('port', (process.env.PORT || 8000));
// this for dynamically getting data sources
const dataRouter = express.Router()

dataRouter.get("/", async (req,res) => {
    switch(req.url) {
        case "/":
        res.status(200)
        const query = await notion.databases.query({                    
        database_id: notionDataSourcesId
        }).then(result => res.json(result.results.map(item=> item.properties)))
    break;

    default:
        res.status(404)
        res.json({result: "default not found"})

}
})
    
    

// call next batch of attributes
dataRouter.get("/:id/:page",async (req,res) => {
    console.log(req.params.id)
    console.log(req.params.page)
    res.status(200)
    const query = await notion.databases.query({                    
        database_id: notionAttributesId,
        filter: {
            property: 'Sources',
            rollup: {
                any:{
                    "relation":{
                        "contains":req.params.id
                    }
                }
            },
          },

        start_cursor:req.params.page

        }).then(result => res.json(result))
})

dataRouter.get("/:id",async (req,res) => {
    console.log(req.params.id)
    res.status(200)
    const query = await notion.databases.query({                    
        database_id: notionAttributesId,
        filter: {
            property: 'Sources',
            rollup: {
                any:{
                    "relation":{
                        "contains":req.params.id
                    }
                }
            },
          },

        }).then(result => res.json(result))
})
// this for dynamically getting conectors data
const connectorRouter = express.Router()

connectorRouter.get("/",async (req,res) => {
    console.log(req.url)
    res.status(200)
        const query = await notion.databases.query({                    
        database_id: notionDataConnectorsId
        }).then(result => res.json(result.results.map(item=> item.properties)))
})
connectorRouter.get("/:id",(req,res) => {
    console.log(req.url)
    res.status(200)
    res.json({result:`connecor with id ${req.params.id}`})
})




app.use("/api/data-sources" ,dataRouter)
app.use("/api/data-connectors",connectorRouter)

app.listen(app.get('port'), function() {
    console.log('Express app is running on port', app.get('port'));
  });

module.exports = app