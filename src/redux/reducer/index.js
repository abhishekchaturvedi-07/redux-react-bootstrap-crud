import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer/ContactsReducer";

export default combineReducers({
  contact: contactsReducer,
});
