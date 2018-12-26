import { createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { appReducer  } from "../reducers/appReducer";
import app from "../state/appState";
const AppStore = createStore(appReducer,app,applyMiddleware(thunk));
export default AppStore;