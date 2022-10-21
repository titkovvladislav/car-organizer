import { createReducer, on } from '@ngrx/store';
import { ApplicationI } from "../shared/models/application.model";
import { addApplication } from "./applications.actions";

export const initialState: ReadonlyArray<ApplicationI> = [];

export const applicationsReducer = createReducer(
  initialState,
  on(addApplication, (state, { application }) => {
    return [...state, application];
  })
);
