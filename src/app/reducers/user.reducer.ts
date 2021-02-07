import { User } from '../models/user.model';
import { Action } from '../actions';
import {
  USER_ADD,
  USER_DELETE,
  USER_LIST_ERROR,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_UPDATE,
} from '../actions/user.action';
import { StoreUtility } from '../utils/store.utility';

/*
 * Mainly reducers take 2 params
 * function reducer(state:State<any>, actions: enum[]) : State<any> { ... }
 * Any action contains 2 things in it.
 *   1. type: SwitchCase to determine which action is requested to be execute...
 *   2. Payload: data which we are going to send as overhead to the performed action.
 * */

export interface UserReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  entities: { [id: number]: User };
  ids: number[];
}

// defining my InitialUserState<UserReducerState>
const initialUserState: UserReducerState = {
  loaded: false,
  loading: false,
  error: false,
  entities: {},
  ids: [],
};

// implementing required reducer-function
export function UserReducer(
  state: UserReducerState = initialUserState,
  action: Action
): UserReducerState {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };
    case USER_DELETE:
      const id: number = action.payload.id;
      const newIds: number[] = state.ids.filter((idx: number) => idx !== id);
      const newEntries = StoreUtility.removeKey(state.entities, id);
      return {
        ...state,
        ...{
          ids: newIds,
          entities: newEntries,
        },
      };
    case USER_UPDATE: {
      const user: User = action.payload.data;
      const entity = { [user.id]: user };
      const updateEntities = { ...state, ...entity };
      return { ...state, ...{ entities: updateEntities } };
    }
    case USER_ADD: {
      const user: User = action.payload.data;
      const entity = { [user.id]: user };
      const newEntities = { ...state.entities, ...entity };
      const newIds = StoreUtility.filterDuplicateIds([...state.ids, user.id]);
      return { ...state, ...{ entities: newEntities, ids: newIds } };
    }
    case USER_LIST_ERROR:
      return { ...state, error: true, loading: false };
    case USER_LIST_SUCCESS: {
      const users = action.payload.data;
      const obj = StoreUtility.normalizeFormat(users);
      const newEntities = { ...state.entities, ...obj };
      const ids = users.map((user) => user.id);
      const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
      return {
        ...state,
        ...{
          loaded: true,
          loading: false,
          error: false,
          entities: newEntities,
          ids: newIds,
        },
      };
    }
    default:
      return state;
  }
}
