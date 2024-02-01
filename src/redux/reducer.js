import { ADD_LETTER, SELECT_MEMBER, NEW_MESSAGE } from "./action";

const initialState = {
  letterList: [],
  selectedMember: "",
};

const letterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return {
        ...state,
        letterList: [action.payload, ...state.letterList],
      };
    case SELECT_MEMBER:
      return {
        ...state,
        selectedMember: action.payload,
      };
    case NEW_MESSAGE:
      const updatedList = [action.payload, ...state.letterList];
      localStorage.setItem("letterList", JSON.stringify(updatedList));
      return {
        ...state,
        newMessage: updatedList,
      };
    default:
      return state;
  }
};
export default letterReducer;
