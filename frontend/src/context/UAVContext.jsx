import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../reducer/uavReducer";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";
export const UavContext = createContext();
const { Provider } = UavContext;

const UAVProvider = ({ children }) => {
  const [uavs, dispatch] = useReducer(reducer, initialState);

  const getUAVData = async (url) => {
    dispatch({ type: "START" });
    try {
      const { data } = await axios.get(`${BASE_URL}api/${url}/`);
      dispatch({ type: "UAV_SUCCESS", payload: data }); 
    } catch (error) {
      dispatch({ type: "UAV_FAIL" });
      console.log(error);
    }
  };
  const getUAV = () => getUAVData("uavs");

  useEffect(() => {
    getUAV();
  }, []);

  const values = {
    uavs,
    dispatch,
    getUAV,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useUavContext = () => {
  return useContext(UavContext);
};

export default UAVProvider;
