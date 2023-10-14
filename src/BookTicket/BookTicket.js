import React from "react";
import ListSeat from "./ListSeat";
import ChooseSeat from "./ChooseSeat";
import "./Style.css";

function BookTicket() {
  return (
    <div className="bookingMovie">
      <div className="overplay"></div>
      <div className="container">
        <div className="row">
          <div className="col-7 screen-content text-center">
            <h2 className="screen-content text-white">Đặt vé xem phim</h2>
            <div className="screen m-auto">Màn hình</div>
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
