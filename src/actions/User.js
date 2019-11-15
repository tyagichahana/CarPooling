import cloneDeep from "lodash/cloneDeep";
import * as types from "@/constants/Types";
import Api from "@/utils/Api";
import Store from "@/reducer";
export const AUTH_TOKEN_KEY = "AUTH_TOKEN_KEY";

export const loginAction = data => {
  Store.dispatch({
    type: types.LOGIN_LOADING
  });
  Api.loginUser(data)
    .then(res => {
      if (res.success) {
        Store.dispatch({
          type: types.LOGIN_SUCCESS,
          data: res
        });
        window.localStorage.setItem(AUTH_TOKEN_KEY, res.token);
        window.location.reload();
      } else {
        Store.dispatch({
          type: types.LOGIN_FAILURE,
          data: res.error
        });
      }
    })
    .catch(err => {
      Store.dispatch({
        type: types.LOGIN_FAILURE,
        data: err
      });
    });
};

export function redirectLogin() {
  const localToken = window.localStorage.getItem(AUTH_TOKEN_KEY);
  if (localToken) {
    Store.dispatch({
      type: "LOGIN_REDIRECT"
    });
  } else {
    const { pathname } = window.location;
    if (pathname === "/") {
      return;
    } else {
      window.location.href = "/";
    }
  }
}

export function getDrivers() {
  Api.getDrivers().then(res => {
    Store.dispatch({
      type: types.GET_DRIVERS_SUCCESS,
      data: res.drivers
    });
  });
}

export function updateDriverList(idx) {
  Store.dispatch({
    type: types.SELECT_DRIVER,
    data: [idx]
  });
}

export function confirmDriver() {
  const selectedDrivers = Store.getState().login.selectedDrivers;
  const drivers = cloneDeep(Store.getState().login.originalDrivers);
  selectedDrivers.map(s => {
    drivers[s].seats_available = Math.max(0, drivers[s].seats_available - 1);
    return s;
  });
  Store.dispatch({
    type: types.GET_DRIVERS_SUCCESS,
    data: drivers
  });
  Store.dispatch({
    type: types.SELECT_DRIVER,
    data: []
  });
}

export function searchSource(source, destination = "") {
  const drivers = cloneDeep(Store.getState().login.originalDrivers);
  const query = source.toLowerCase();
  const query2 = destination.toLowerCase();
  Store.dispatch({
    type: types.UPDATE_DRIVERS_SUCCESS,
    data: drivers.filter(driver => {
      const src = driver.source.toLowerCase();
      const dest = driver.destination.toLowerCase();
      if (
        query2 &&
        src.indexOf(query) > -1 &&
        dest.indexOf(query2) > -1 &&
        driver.seats_available
      ) {
        return true;
      }

      if (!query2 && src.indexOf(query) > -1 && driver.seats_available) {
        return true;
      }
      return false;
    })
  });
}

window.searchSource = searchSource;

export default loginAction;
