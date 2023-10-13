import React from "react";
import ListSeat from "./ListSeat";
import ChooseSeat from "./ChooseSeat";
import "./Style.css";

function BookTicket() {
  return (
    <div className="bookingMovie">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <ListSeat />
          </div>
          <div className="col-5">
            <ChooseSeat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
