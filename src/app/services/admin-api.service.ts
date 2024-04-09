import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {

  server_url = 'https://dummyjson.com/recipes'

  constructor(private http: HttpClient) { }

  userFetch() {
    return this.http.get(this.server_url)
  }


}
