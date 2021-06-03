import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRepoAction from "../actions/get-repos.actions";
import { Repo } from "../models/repo.entity";
import { Observable } from "rxjs";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.css"],
})
export class RepositoriesComponent implements OnInit {
  repos$: Observable<any>;
  repos: Array<Repo> = [];
  constructor(private store: Store<{ repos: Array<Repo> }>) {
    this.repos$ = this.store.select("repos");
  }

  ngOnInit(): void {
    this.store.dispatch(fromRepoAction.GetRepos());
    this.repos$.subscribe((data) => {
      this.repos = data.repos;
    });
  }
}
