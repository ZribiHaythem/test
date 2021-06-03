import { createAction, props } from "@ngrx/store";
import { Repo } from "../models/repo.entity";

export const GetRepos = createAction(
  "[GetRepos] Load GetReposs"
);

export const GetReposSuccess = createAction(
  "[GetRepos] Load GetReposs Success",
  props<{ repos: Repo[] }>()
);

export const GetReposFailure = createAction(
  "[GetRepos] Load GetReposs Failure",
  props<{ error: any }>()
);
