import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoadingAction } from "../store/actions";

const GlobalContext = createContext({
  isGlobalLoading: false,
  setIsGlobalLoading: () => {},
});

const GlobalContextProvider = ({ children }) => {
  const { globalLoading: isGlobalLoading } = useSelector(
    (s) => s.globalReducer
  );
  const dispatch = useDispatch();
  const setIsGlobalLoading = (payload) => {
    dispatch(setGlobalLoadingAction(payload));
  };

  return (
    <GlobalContext.Provider value={{ isGlobalLoading, setIsGlobalLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export { GlobalContextProvider };
export default useGlobalContext;
