import { RootState } from "@/store"
import { useSelector } from "react-redux"

export const useCurrency = () => {
    const currency = useSelector(
        (state: RootState) => state.reducers.currency.currency)
    return currency
}