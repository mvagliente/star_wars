import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError as observableThrowError } from 'rxjs';
import { ApiConfigService } from 'src/app/services/ApiConfigService';
import {catchError, map} from 'rxjs/operators';
import { ErrorHandle } from 'src/app/services/ErrorHandle';

@Injectable()
export class SpaceshipsService extends ErrorHandle {

    private _baseUrl:string = ""

    constructor(private http: HttpClient,
        private configService: ApiConfigService) {
            super();
            this._baseUrl = this.configService.getApiURI()
    }


    getSpaceships(): Observable<any[]> {
        let headers: HttpHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.get<any[]>(this._baseUrl + "starships/",{  headers: headers}).pipe(
            map(res => {
                //console.log(res);
                return res;
            }),
            catchError(this.handleError),);
    }

    getSpaceship(id:string): Observable<any[]> {
        let headers: HttpHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.get<any[]>(this._baseUrl  + "starships/" + id,{  headers: headers}).pipe(
            map(res => {
                //console.log(res);
                return res;
            }),
            catchError(this.handleError),);
    }
    
    
    getPilot(url:string): Observable<any[]> {
        let headers: HttpHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.get<any[]>(url,{  headers: headers}).pipe(
            map(res => {
                //console.log(res);
                return res;
            }),
            catchError(this.handleError),);
    }

}

