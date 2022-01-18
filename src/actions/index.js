export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SET_MEMORY = "SET_MEMORY";
export const PUT_MEMORY = "PUT_MEMORY";
export const ZERO_MEMORY = "ZERO_MEMORY";


export function addOne(){
    return({type:ADD_ONE});
}

export function applyNumber(number){
    return({type:APPLY_NUMBER, payload:number});
}

export function changeOperator(operator){
    return({type:CHANGE_Od
export function memoryActions(action, memory){
    if(action === "M+"){
      return({type:SET_MEMORY});
    } else if(action === "MR"){
      return({type:PUT_MEMORY});
    } else if(action === "MC"){
      return({type:ZERO_MEMORY});
    }
} 
