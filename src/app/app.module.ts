import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { RepositoriesComponent } from "./components/repositories.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { RepoEffect } from "./effects/repo-effects";
import { reposReducer } from "./reducers/repo.reducer";

@NgModule({
  declarations: [AppComponent, RepositoriesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([RepoEffect]),
    StoreModule.forRoot({ repos: reposReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
