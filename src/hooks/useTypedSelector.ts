import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

// Typed react-redux hook useSelect, strictly assigned to state
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
