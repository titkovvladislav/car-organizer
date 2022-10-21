import { createFeatureSelector } from "@ngrx/store";
import { ApplicationI } from "../shared/models/application.model";

export const selectApplications = createFeatureSelector<ReadonlyArray<ApplicationI>>('application');
