// have to implement <RootReducerStore>
// which will eventually inject (DI) into `app.module.ts` file

import * as fromUserReducer from './user.reducer';
import {ActionReducerMap, createSelector} from '@ngrx/store';
// import { ActionReducerMap } from '@ngrx/store';

// ** Export an Interface of Type RootReducer
// ** which might have my all custom reducer and it's
// ** corresponding actions.

// RootReducerStore -> UserReducer
// UserReducer -> UserAction[...many actions declared in ../actions/user.action.ts]

export interface RootReducerState {
  users: fromUserReducer.UserReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  users: fromUserReducer.UserReducer,
};

export function getUserState(state: RootReducerState): fromUserReducer.UserReducerState {
  return state.users;
}

export const getUserLoaded = createSelector(getUserState, fromUserReducer.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUserReducer.getLoading);
export const getUserEntities = createSelector(getUserState, fromUserReducer.getEntities);
export const getUsers = createSelector(getUserState, fromUserReducer.getUsers);
export const getUserError = createSelector(getUserState, fromUserReducer.getError);

export const getUserById = (state: RootReducerState, id: number) => {
  const entities = getUserEntities(state);
  return entities[id];
};
