import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()

export class ApiService {
    constructor( private http: Http ) {}
    
    private setHeaders(): Headers {
        let headerConfig = {
            'Content-Type':'appication/json',
            'Accept': 'application/json'
        }
        return new Headers(headerConfig)
    }

    private formatError(error: any) {
        return Observable.throw(error.json());        
    }

    post(path: String, body: Object = {}):Observable<any> {
        return this.http.post(
            `${environment.api_url}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders()}
        )
        .catch(this.formatError)
        .map((res: Response) => res.json() );
    }

}