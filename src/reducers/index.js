import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, SET_MEMORY, PUT_MEMORY, ZERO_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        case(SET_MEMORY):
            return({
                ...state,
                memory: state.total
            });

        case(PUT_MEMORY):
            return({
                ...state,
                total: state.memory
            });

        case(ZERO_MEMORY):
            return({
                ...state,
                memory: 0
            });

        default:
            return state;
    }
}

export default reducer;
