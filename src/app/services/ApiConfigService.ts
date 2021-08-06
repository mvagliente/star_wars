import { Injectable }   from "@angular/core";
import { Location }     from '@angular/common';

@Injectable()
export class ApiConfigService {

    _apiURI: string;
    
    constructor() {
        this._apiURI = "https://swapi.dev/api/";
    }

    getApiURI(): string {
        return this._apiURI;
    }
}
