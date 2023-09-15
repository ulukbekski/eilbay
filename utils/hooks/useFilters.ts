import { RootState } from "@/store"
import { useSelector } from "react-redux"

export const useFilters = () => {
    const filters = useSelector(
        (state: RootState) => state.reducers.filters.filterParams)
    return filters
}