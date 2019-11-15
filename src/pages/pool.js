import React, { useState, useEffect } from "react";
import connectComponent from "../connect";
import {
  getDrivers,
  updateDriverList,
  confirmDriver,
  searchSource
} from "../actions/User";
import "./styles.scss";

const Pool = props => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    getDrivers();
  }, []);

  const isSelected = idx => {
    return props.login.selectedDrivers.indexOf(idx) > -1;
  };

  const isConfirmVisible = () => {
    return props.login.selectedDrivers.length > 0;
  };

  return (
    <div>
      <div className="header">
        <div className="Carlogo" />
        <div className="heading">PICK A RIDE</div>
      </div>
      <div className="pool-container">
        <div className="row">
          <div className="input-field col s6">
            <div className="card-panel z-depth-0">
              <label htmlFor="pickUp" className="active">
                Pick-up Location
              </label>
              <input
                id="pickUp"
                type="text"
                placeholder="Enter your pick-up"
                value={source}
                onChange={e => {
                  setSource(e.currentTarget.value);
                  searchSource(e.currentTarget.value, destination);
                }}
              />
            </div>
          </div>

          <div className="input-field col s6">
            <div className="card-panel z-depth-0">
              <label htmlFor="destination" className="active">
                Destination
              </label>
              <input
                id="destination"
                type="text"
                placeholder="Enter your destination"
                value={destination}
                onChange={e => {
                  setDestination(e.currentTarget.value);
                  searchSource(source, e.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pool-list">
        <div className="row">
          {props.login.drivers.map((part, idx) => (
            <div key={idx} className="col s6">
              <div
                className={`card-panel z-depth-0 pool-itemSelect${
                  isSelected(idx) ? " active" : ""
                }`}
                onClick={() => updateDriverList(idx)}
              >
                <div class="row valign-wrapper">
                  <div class="col s2">
                    <img
                      src="https://i.pravatar.cc/50"
                      alt=""
                      class="circle responsive-img"
                    />
                  </div>
                  <div class="col s10">
                    <h6>{part.name}</h6>
                    <div>
                      Route: {part.source} to {part.destination}
                    </div>
                    <div>Vehicle Number: {part.vehicle_number}</div>
                    <div>Seat Available: {part.seats_available}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`confirm-box ${isConfirmVisible() ? " active" : ""}`}>
        <button className="btn" onClick={confirmDriver}>
          Confirm Ride
        </button>
      </div>
    </div>
  );
};
export default connectComponent(Pool);
