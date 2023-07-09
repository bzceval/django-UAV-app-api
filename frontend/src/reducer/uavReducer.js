export const initialState = {
    loading: false,
    ihaList: [],
    error: "",
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "START":
        return { ...state, loading: true };
      case "UAV_SUCCESS":
        return {
          ...state,
          ihaList: action.payload,
          error: "",
          loading: false,
        };
      case "UAV_FAIL":
        return {
          ...state,
          ihaList: [],
          error: action.payload,
          loading: false,
        };
  
      default:
        break;
    }
  };
  