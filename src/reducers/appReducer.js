export function appReducer(state={},action={type:"init"}){
    var next = Object.assign(state);
    console.log(action);
    switch (action.type) {
        case "init":
            break;
        case "load":
            console.log("load");
            break;
        default:
            break;
    }
    return next;
}