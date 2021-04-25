import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import contactsReducer from "./reducer/contactsReducer/ContactsReducer";
import rootReducer from "./reducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
