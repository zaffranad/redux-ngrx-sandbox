import { Action } from '@ngrx/store';

export interface AppAction extends Action {
  payload: {
    id: string,
    name: string
  };
}

export interface ActionPayload {
  payload: {
    id: string,
    name: string
  };
}
