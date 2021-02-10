import {Action as NGRXAction} from '@ngrx/store';

// @ts-ignore
export class Action extends NGRXAction {
  [x: string]: any;
  payload?: any;
}
