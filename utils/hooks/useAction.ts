import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as favoritesActions } from "@/store/favorites/favorites.slice";
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from "@/store/products/products.slice";
import { setLoggedIn, setUser } from "@/store/user/user.slice";
import { setQuery } from "@/store/search/search.slice";
import { setCurrency } from "@/store/currency/currency.slice";
import { setFilter } from "@/store/filter/filter.slice";

const rootActions = {
  ...favoritesActions,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  setUser,
  setLoggedIn,
  setQuery,
  setCurrency,
  setFilter,

};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
