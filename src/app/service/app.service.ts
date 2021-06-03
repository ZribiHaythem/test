import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Repo } from "../models/repo.entity";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}
  baseUrl: string = environment.url;
  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.baseUrl + "/repos");
  }
}
