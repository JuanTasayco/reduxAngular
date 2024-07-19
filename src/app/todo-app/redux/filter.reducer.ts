import { createReducer, on } from "@ngrx/store";
import { filter, filterTodo } from "./filter.actions";



const initialState: filterTodo = 'TODOS';
export const filterReducer = createReducer(initialState, on(filter, (state, { filtro }) => {
    return state;
}))