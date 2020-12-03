import { Types } from "./actionsTypes";

 const tracksReduser= ( state = [], action ) => {
  switch (action.type) {
    case Types.FETCH_START:
      return state;
    default:
      return state;
  }
};

export default tracksReduser