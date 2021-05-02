import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// storing data in local storage
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   // storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, composeWithDevTools());

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export default store;
