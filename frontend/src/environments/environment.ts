import { HttpHeaders } from '@angular/common/http';

export const environment = {
    production: false,
    backendUrl: 'http://localhost:8080/backend/',
    httpHeaders: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Content-Type':  'application/json'
    })
};