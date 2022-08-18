import { legacy_createStore as createStore} from 'redux'
import reducers  from "./reducers/index";

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
//named export import {} form 'somehting/som"
//default export import abc_module form 'somehting/som"