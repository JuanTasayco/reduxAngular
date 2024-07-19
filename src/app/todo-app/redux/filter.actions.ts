import { createAction, props } from "@ngrx/store";

export type filterTodo = 'TODOS' | 'ACTIVOS' | 'COMPLETADOS';

export const filter = createAction('[FILTER] selectFilter', props<{ filtro: string }>());