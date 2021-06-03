import { Repo } from "../models/repo.entity";

export interface ReposState {
  repos: Array<Repo>;
  error: any;
}

export interface Appstate {
  reposFeature: ReposState;
}
