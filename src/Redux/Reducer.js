import { data } from "../Assets/constants"

const initialState = [...data]

const itemReducer = (state = initialState, action) => {
    // console.log(action);

    switch (action.type) {
        case "approve": {
            let newData = state.map((element) => {
                if (element.id == action.payload) element.status = "Approved";
                return element;
            })
            return newData
        }
        case "missing": {
            let newData = state.map((element) => {
                if (element.id == action.payload) element.status = "Missing";
                return element;
            })
            return newData
        }
        case "missing-urgent": {
            let newData = state.map((element) => {
                // console.log(element.id, action.payload);
                if (element.id == action.payload) element.status = "Missing Urgent";
                return element;
            })
            return newData
        }
        case "edit": {
            let newData = state.map((element) => {
                // console.log(element.id, action.payload);
                if (element.id == action.payload.id) return action.payload;
                return element;
            })
            return newData
        }
        default: return state
    }
}


export default itemReducer;