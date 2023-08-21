import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer, // переносим наши страницы сюда и reducers им соответствующие
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

//закомбайненные reducers отдали store
let store = createStore(reducers);

export default store;