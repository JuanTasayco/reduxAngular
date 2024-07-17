import { createAction, props } from "@ngrx/store";

export const addItem = createAction('[TODO] add todo', props<{ texto: string }>());
export const editItem = createAction('[TODO edit todo', props<{ id: number, texto: string }>());
export const toggle = createAction('[TODO] toggle', props<{ id: number }>());
export const deleteItem = createAction('[TODO] eliminar todo', props<{ id: number }>());




