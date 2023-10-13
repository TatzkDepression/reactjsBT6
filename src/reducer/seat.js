import { message } from "antd";
import { arrSeat } from "../BookTicket/Data/Data";
import { CHOOSE_CHAIR, DELETE_CHAIR } from "./constant/TicketConst";

const initialState = {
  DanhSach: [...arrSeat],
  ChooseSeat: [],
  paySeat: [],
};

export let seat = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_CHAIR: {
      return { ...state, ChooseSeat: payload };
    }
    case DELETE_CHAIR: {
      let cloneArr = [...state.ChooseSeat];
      let index = cloneArr.findIndex((item) => item.soGhe === payload.soGhe);
      cloneArr.splice(index, 1);
      message.error("xóa thành công");
      return { ...state, ChooseSeat: cloneArr };
    }
    default:
      return state;
  }
};
