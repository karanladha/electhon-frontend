import { SLOT_BOOKING_FAIL,
    SLOT_BOOKING_REQUEST,
    SLOT_BOOKING_SUCCESS,
    CLEAR_ERRORS, 
} from "../constants/slotBookingConstant"; 

export const slotBookingReducer = (state = { area: [] }, action) => {
    switch (action.type) {
      case SLOT_BOOKING_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SLOT_BOOKING_SUCCESS:
        return {
          ...state,
          loading: false,
          area: action.payload,
        };
  
      case SLOT_BOOKING_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };