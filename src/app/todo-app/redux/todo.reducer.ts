import { createReducer, on } from "@ngrx/store";
import { addItem, deleteItem, editItem, toggle, toggleAll } from "./todo.actions";
import { TodoItem } from "../models/todo-item";

const initialState: TodoItem[] = [];
/*redux */
export const todoReducer = createReducer(initialState,
    on(addItem, (state, { texto }) => {
        return [...state, new TodoItem(texto)];
    }),
    on(toggle, (state, { id }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            } else {
                return todo
            }
        });
    }), on(editItem, (state, { id, texto }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    contentText: texto
                }
            } else {
                return todo;
            }
        })
    }),
    on(deleteItem, (state, { id }) => {
        return state.filter((todo) => todo.id !== id);
    }),
    on(toggleAll, (state, { estado }) => {

        if (estado) {
            return state.map(todo => {
                return { ...todo, complete: true }
            })
        } else {
            return state.map(todo => {
                return { ...todo, complete: false }
            })
        }

    }))

