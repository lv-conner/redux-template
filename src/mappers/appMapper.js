import { bindActionCreators } from "redux";
import * as AppActions from "../actions/appActions";

export function mapStateToProps(state){
    return {
        ...state
    }
}

export function mapDispatchToProps(dispatcher){
    return {
        AppActions:bindActionCreators(AppActions,dispatcher)
    }
}