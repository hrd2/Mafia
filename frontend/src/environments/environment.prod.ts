import { HttpHeaders } from '@angular/common/http';

export const environment = {
    production: true,
    backendUrl: '/backend/',
    httpHeaders: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};