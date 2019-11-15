import axios from "axios";
import * as Auth from "@/constants/Endpoints";

export default {
  loginUser: data => axios({ ...Auth.LOGIN, data }).then(res => res.data),
  getDrivers: () => axios({ ...Auth.DRIVIERS }).then(res => res.data)
};
