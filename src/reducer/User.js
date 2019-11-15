import * as types from "@/constants/Types";

const initialState = {
  loading: false,
  data: null,
  error: null,
  redirect: false,
  drivers: [],
  selectedDrivers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_LOADING: {
      return { ...state, loading: true };
    }
    case types.LOGIN_SUCCESS: {
      return { ...state, data: action.data, loading: false };
    }
    case types.LOGIN_FAILURE: {
      return { ...state, error: action.data, loading: false };
    }
    case types.LOGIN_REDIRECT: {
      return { ...state, redirect: true, loading: false };
    }
    case types.GET_DRIVERS_SUCCESS: {
      return { ...state, drivers: action.data, originalDrivers: action.data };
    }
    case types.UPDATE_DRIVERS_SUCCESS: {
      return { ...state, drivers: action.data };
    }
    case types.SELECT_DRIVER: {
      return { ...state, selectedDrivers: action.data };
    }
    default: {
      return { ...state };
    }
  }
}
