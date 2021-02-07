import { User } from '../models/user.model';

export const USER_LIST_REQUEST = 'user list requested';
export const USER_LIST_SUCCESS = 'user list success';
export const USER_DELETE = 'user delete';
export const USER_UPDATE = 'user update';
export const USER_ADD = 'user add';
export const USER_LIST_ERROR = 'user list error';

/*
 * Mainly reducers take 2 params
 * function reducer(state:State<any>, actions: enum[]) : State<any> { ... }
 * Any action contains 2 things in it.
 *   1. type: SwitchCase to determine which action is requested to be execute...
 *   2. Payload: data which we are going to send as overhead to the performed action.
 * */

// action to request user to load
export class UserListRequestAction {
  readonly type = USER_LIST_REQUEST;
}

// action to delete speficed user
export class UserListDeleteAction {
  readonly type = USER_DELETE;
  constructor(public payload?: { id: number }) {}
}

// action to add new User
export class UserListAddAction {
  readonly type = USER_ADD;
  constructor(public payload?: { data: User }) {}
}

// action to add update to a User
export class UserUpdateAction {
  readonly type = USER_UPDATE;
  constructor(public payload?: { data: User }) {}
}

// action to determine any errors happened?
export class UserListErrorAction {
  readonly type = USER_LIST_ERROR;
}

// action if user successfully added to state
export class UserListSuccessAction {
  readonly type = USER_LIST_SUCCESS;

  constructor(public payload?: { data: User[] }) {}
}
