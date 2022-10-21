import { createAction, props } from "@ngrx/store";
import { ApplicationI } from "../shared/models/application.model";

export const addApplication = createAction(
  '[Application List] Add Application',
  props<{ application: ApplicationI }>()
);
