import { Attribute, Category, DataSource } from "@/@types/types";
import { getAttributes } from "@/services/getAttributes";
import { getDataSources } from "@/services/sources-service";
import { createContext, useState } from "react";
import { ReactNode } from "react";
// const { Client } = require("@notionhq/client");

let res: DataSource[] = [];

export const getStaticPaths = async () => {
  console.log("getStaticPaths");
  if (!res[0]) {
    res = await getDataSources();
    console.log(res.length);
  }
  let idPaths = res.map((item) => ({
    params: {
      source: item.name.toString().toLowerCase().trim().replace(/ /g, "-"),
    },
  }));
  console.log("these paths", idPaths);
  return {
    paths: idPaths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { source: string };
}) {
  //{ params =""}: any
  console.log("getStaticProps pp", params);
  let atts: Attribute[] = [];
  if (!res[0]) {
    res = await getDataSources();
  }
  if (params?.source) {
    let id =
      res?.find(
        (item) =>
          item.name.toString().toLowerCase().trim().replace(/ /g, "-") ==
          params.source
      )?.notionId || "";
    console.log("source id", id);
    atts = await getAttributes(id); //params.id
    console.log("att all", atts.length);
  }
  // res = await getDataSources();

  return {
    props: {
      results: res,
      attributes: atts,
    },
    // revalidate: 86400, // 24h In seconds
  };
}

const initialCategories: Category[] = [
  { name: "Appliances", items: [] },
  { name: "Auto", items: [] },
  { name: "Blogging", items: [] },
  { name: "Calenders", items: [] },
  { name: "Clocks", items: [] },
  { name: "Cloud Storage", items: [] },
  { name: "Communication", items: [] },
  { name: "Entertainment", items: [] },
  { name: "Finance", items: [] },
  { name: "Games", items: [] },
  { name: "Health and Fitness", items: [] },
  { name: "Location and Navigation", items: [] },
  { name: "Productivity", items: [] },
  { name: "Security", items: [] },
];

const DataContext = createContext<any>({});

interface Props {
  children?: ReactNode;
  results: DataSource[];
  attributes: Attribute[];
  // any props that come into the component
}

export function DataProvider({ children, results, attributes }: Props) {
  const [dataSources, setDataSources] = useState<DataSource[]>([]);
  const [categories, setCategories] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<[string]>(["All"]);
  const [sortby, setSortby] = useState("All");
  const [filter, setFilter] = useState("All");
  const [searchVal, setSearchVal] = useState("");

  const handleDataSources = () => {
    if (!dataSources[0]) {
      setDataSources(results);
    } else console.log("data is here ", results);
  };

  const sortbyCategories =
    selectedCategory[0] === "All"
      ? initialCategories
      : initialCategories.filter((category) =>
          selectedCategory.includes(category.name)
        );

  const sortbyStatus =
    sortby === "All"
      ? sortbyCategories
      : sortby === "Live"
      ? sortbyCategories.map((category: any) => {
          const filtered =
            category.items.length > 0
              ? {
                  name: category.name,
                  items: [
                    ...category.items.filter(
                      (item: any) => item.status === "Live Available"
                    ),
                  ],
                }
              : category;
          return filtered;
        })
      : sortby === "Requested"
      ? sortbyCategories.map((category: any) => {
          const filtered =
            category.items.length > 0
              ? {
                  name: category.name,
                  items: [
                    ...category.items.filter(
                      (item: any) => item.status === "Requested"
                    ),
                  ],
                }
              : category;
          return filtered;
        })
      : sortbyCategories.map((category: any) => {
          const filtered =
            category.items.length > 0
              ? {
                  name: category.name,
                  items: [
                    ...category.items.filter(
                      (item: any) =>
                        item.status !== "Live Available" &&
                        item.status !== "Requested"
                    ),
                  ],
                }
              : category;
          return filtered;
        });

  const sortbySearch =
    searchVal === ""
      ? sortbyStatus
      : sortbyStatus.map((category: any) => {
          const filtered =
            category.items.length > 0
              ? {
                  name: category.name,
                  items: [
                    ...category.items.filter((item: any) =>
                      item.name.toLowerCase().includes(searchVal)
                    ),
                  ],
                }
              : category;
          return filtered;
        });

  const sortbyFilter =
    filter === "All"
      ? sortbySearch
      : filter === "Dynamic Data"
      ? sortbySearch.map((category: any) => {
          const filtered =
            category.items.length > 0
              ? {
                  name: category.name,
                  items: [
                    ...category.items.filter((item: any) => item.isDynamic),
                  ],
                }
              : category;
          return filtered;
        })
      : sortbySearch.map((category: any) => {
          const filtered =
            category.items.length > 0
              ? {
                  name: category.name,
                  items: [
                    ...category.items.filter((item: any) => item.isDynamic),
                  ],
                }
              : category;
          return filtered;
        });
  const handleCategories = () => {
    // console.log(dataSources);
    if (dataSources[0] && categories == null) {
      [...dataSources].map((source: any) => {
        source.categories.map((item: any) =>
          initialCategories.map((cat) => {
            if (cat.name == item) {
              cat.items.push(source);
            }
          })
        );
      });
      setCategories(initialCategories);
    }
    if (categories !== null) {
      if (selectedCategory[0] !== "All") {
        setCategories(sortbyCategories);
      } else setCategories(initialCategories);

      if (sortby !== "All") {
        setCategories(sortbyStatus);
      }
      if (searchVal !== "") {
        setCategories(sortbySearch);
      }
      if (filter !== "All") {
        setCategories(sortbyFilter);
      }
    }
  };
  // shows the datasources in the first selected Category

  const similarDataSources =
    categories &&
    initialCategories.find(
      (category: any) => category.name === selectedCategory[0]
    );

  return (
    <DataContext.Provider
      value={{
        dataSources,
        handleDataSources,
        categories,
        handleCategories,
        selectedCategory,
        setSelectedCategory,
        sortby,
        setSortby,
        searchVal,
        setSearchVal,
        similarDataSources,
        filter,
        setFilter,
        attributes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
