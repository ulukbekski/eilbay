import { RootState } from "@/store/favorites"
import { useSelector } from "react-redux"

export const useFavorites = () => {
    const favorites  = useSelector(
        (state: RootState) => state.favorites)
    return favorites
}