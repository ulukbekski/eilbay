import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as favoritesActions } from "@/store/favorites/favorites.slice";
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from "@/store/products/products.slice";

const rootActions = {
  ...favoritesActions,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
