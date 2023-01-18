import { createContext, useState } from "react";
import { ReactNode } from "react";

const initialCategories: any[] = [
  { name: "Appliances", items: [] },
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
  { name: "Security", items: [] },
];

const DataContext = createContext<any>({});

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export function DataProvider({ children }: Props) {
  const [dataSources, setDataSources] = useState(null);
  const [categories, setCategories] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<[string]>(["All"]);
  const [sortby, setSortby] = useState("All");
  const [filter, setFilter] = useState("All");
  const [searchVal, setSearchVal] = useState("");

  const handleDataSources = (data: any) => {
    setDataSources(data);
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
                      (item: any) =>
                        item.Status_.select?.name === "Live Available"
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
                      (item: any) => item.Status_.select === null
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
                        item.Status_.select &&
                        item.Status_.select?.name !== "Live Available"
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
                      item.Name.title[0].plain_text
                        .toLowerCase()
                        .includes(searchVal)
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
                    ...category.items.filter(
                      (item: any) =>
                        item["Dynamic Data"].relation[0]?.id !== undefined
                    ),
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
                    ...category.items.filter(
                      (item: any) => !item["Dynamic Data"].relation[0]
                    ),
                  ],
                }
              : category;
          return filtered;
        });
  const handleCategories = () => {
    if (dataSources && categories == null) {
      [...dataSources].map((source: any) => {
        source.Categories.multi_select.map((item: any) =>
          initialCategories.map((cat) => {
            if (cat.name == item.name) {
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
