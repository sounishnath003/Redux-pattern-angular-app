// have to implement <RootReducerStore>
// which will eventually inject (DI) into `app.module.ts` file

import { UserReducer, UserReducerState } from './user.reducer';
import {} from '@ngxs/store';

// ** Export an Interface of Type RootReducer
// ** which might have my all custom reducer and it's
// ** corresponding actions.

// RootReducerStore -> UserReducer
// UserReducer -> UserAction[...many actions declared in ../actions/user.action.ts]

export interface RootReducerState {
  users: UserReducerState;
}

// export rootReducer: ActionReducerMap<RootReducerState> {
//     users: UserReducer
// }
