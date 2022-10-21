import { createReducer, on } from '@ngrx/store';
import { ApplicationI } from "../shared/models/application.model";
import {addApplication, retrievedApplicationList} from "./applications.actions";



export const initialState: ReadonlyArray<ApplicationI> = [];

export const applicationsReducer = createReducer(
  initialState,
  on(retrievedApplicationList, (state, { applications }) => applications),
  on(addApplication, (state, { application }) => {
    return [...state, application];
  })
);
