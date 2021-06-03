import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as GetRepos from "../actions/get-repos.actions";
import { Repo } from "../models/repo.entity";

export const adapter: EntityAdapter<Repo> = createEntityAdapter<Repo>();

export interface State extends EntityState<Repo> {
  repos: Repo[];
  error: any;
}

export const initialState: State = adapter.getInitialState({
  repos: [],
  error: null,
});

export const reposReducer = createReducer(
  initialState,
  on(GetRepos.GetReposSuccess, (state, action) =>
    adapter.setAll(action.repos, { ...state, repos: action.repos })
  ),
  on(GetRepos.GetReposFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);

export const { selectAll } = adapter.getSelectors();
