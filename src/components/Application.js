import React, { Component } from 'react'
import { Provider,connect  } from "react-redux";
import { mapDispatchToProps,mapStateToProps } from "../mappers/appMapper";
import AppStore from "../stores/appStore";
class Page extends Component{
    constructor(props) {
        super(props)
        debugger;
    }
    componentDidMount(){
        this.props.AppActions.load();
    }
    render(){
        return <div>Application</div>
    }
}
var WrapPage = connect(mapStateToProps,mapDispatchToProps)(Page);
class Application extends Component{
    render(){
        return (
            <Provider store={AppStore}>
                <WrapPage />
            </Provider>
        )
    }
}


export default Application;