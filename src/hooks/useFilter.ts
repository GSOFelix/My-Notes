import { useState } from "react";

type FilterFunction<T> = (item:T,term:string) => boolean;

export const useFilter = <T,> (
    initialData: T[],
    filterFunction : FilterFunction<T>
) => {
    const [filteredData, setFilteredData] = useState<T[]>(initialData);
    const [originalData, setOriginalData] = useState<T[]>(initialData);

    const applyFilter = (termo:string) =>{
        if(!termo){
            setFilteredData(originalData);
        }else{
            const filtered = originalData.filter(item =>
                filterFunction(item,termo.toLowerCase().trim())
            );
            setFilteredData(filtered);
        }
    };

    const updateData = (newData: T[]) => {
        setOriginalData(newData);
        setFilteredData(newData);
      };

    return{filteredData,updateData,applyFilter}


}