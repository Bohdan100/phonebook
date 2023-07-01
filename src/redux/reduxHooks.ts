import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useTsDispatch = () => useDispatch<AppDispatch>();
export const useTsSelector: TypedUseSelectorHook<RootState> = useSelector;
