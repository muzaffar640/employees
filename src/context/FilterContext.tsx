import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterContext = createContext<FilterContextType>({
  filter: "",
  setFilter: () => {},
});

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string>("");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
