import axios from "axios";
import { SLOT_BOOKING_FAIL,
    SLOT_BOOKING_REQUEST,
    SLOT_BOOKING_SUCCESS,
    CLEAR_ERRORS,
} from "../constants/slotBookingConstant";


export const getSlotDetails = (pincode) => async (dispatch) => {
    try {
      dispatch({ type: SLOT_BOOKING_REQUEST });
      const { data } = await axios.get(`/api/area/getArea/${pincode}`);
  
      dispatch({ type: SLOT_BOOKING_SUCCESS, payload: data.area });
    } catch (error) {
      dispatch({ type: SLOT_BOOKING_FAIL, payload: error.response.data.message });
    }
  };