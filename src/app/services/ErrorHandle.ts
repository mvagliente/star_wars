
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable }                            from "@angular/core";

@Injectable()
export class ErrorHandle {

    constructor() {
    }

    public handleError(error: any): Observable<any> {
        if (error.status == 401 || error.status == 403) {
            return observableThrowError(error);
        }

        var applicationError: any = error.headers.get("Application-Error");
        var serverError: any = error;
        var modelStateErrors: string = "";

        if (serverError.status == 400 && serverError.error) {
            if (typeof (serverError.error) == "string")
                modelStateErrors = serverError.error;
            else
                modelStateErrors = serverError.error[Object.keys(serverError.error)[0]];
        }
        else {
            modelStateErrors = error.message + "\n";
        }

        return observableThrowError(applicationError || modelStateErrors || "Server error");
    }
}
