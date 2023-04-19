import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BACKEND_ROUTES } from "../backend.routes";

@Injectable()
export class SandBoxService {

    constructor(private http: HttpClient) {

    }

    SessionTest(){
        return this.http.get(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.sandbox.testSession}`);
    }
}