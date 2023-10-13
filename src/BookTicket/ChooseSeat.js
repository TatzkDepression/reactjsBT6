import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_CHAIR } from "../reducer/constant/TicketConst";

export default function ChooseSeat() {
  const ChooseSeat = useSelector((state) => state.seat.ChooseSeat);
  const dispatch = useDispatch();

  const handleDeleteSeat = (seat) => {
    dispatch({
      type: DELETE_CHAIR,
      payload: seat,
    });
  };

  const totalPrice = (ChooseSeat) => {
    return ChooseSeat.reduce((sum, seat) => sum + seat.gia, 0);
  };

  return (
    <div>
      <strong className="text-white text-align-center">Choose Seat</strong>
      <table className="table">
        <thead>
          <tr>
            <th>Number seat</th>
            <th>Price</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {ChooseSeat.map((item, index) => (
            <tr key={index}>
              <td>{item.soGhe}</td>
              <td>{item.gia.toLocaleString()}VNĐ</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteSeat(item.soGhe)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>Total</td>
            <td>{totalPrice(ChooseSeat).toLocaleString()}VND</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
