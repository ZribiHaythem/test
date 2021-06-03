import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "../service/app.service";
import * as fromRepotActions from "../actions/get-repos.actions";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class RepoEffect {
  loadRepos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromRepotActions.GetRepos),
      mergeMap(() =>
        this.appService.getRepos().pipe(
          map(
            (data) => fromRepotActions.GetReposSuccess({ repos: data }),
            catchError((error) =>
              of(fromRepotActions.GetReposFailure({ error }))
            )
          )
        )
      )
    );
  });
  constructor(private actions$: Actions, private appService: AppService) {}
}
