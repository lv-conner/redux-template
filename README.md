redux template

redux 仅仅向外部提供个状态容器，并在对外提供修改状态的API。

import { createStore ,applyMiddleware} from "redux";       
import thunk from "redux-thunk";                                    //redux-thunk提供异步action。
import { appReducer  } from "../reducers/appReducer";               //reducer为对外提供的API操作的响应。外部改变容器内的状态只有一个方法dispatch(action={type:""})。reducer提供了对外操作得响应。并将响应的处理转移到容器内部。
import app from "../state/appState";                                //初始状态。
const AppStore = createStore(appReducer,app,applyMiddleware(thunk)); //状态容器
export default AppStore;//容器

react-redux是redux和react之间的粘合剂。
其中Provider是一个react组件。该组件接收一个store参数，并将store封装为上下文传入到连接的控件中。
connect函数返回的控件在内部使用mapStateToProps，mapDispatchToProps将传入的store修改为props传入到封装前的props中。
var WrapPage = connect(mapStateToProps,mapDispatchToProps)(Page);
<Provider store={AppStore}>
    <WrapPage />
</Provider>
