import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Appstate, ReposState } from "../store";



export const selectReposFeature =
  createFeatureSelector<Appstate, ReposState>("reposFeature");

export const selectAllRepo = createSelector(
  selectReposFeature,
  (state: ReposState) => state.repos
);
