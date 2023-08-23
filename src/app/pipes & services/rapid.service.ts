import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RapidService {
  url = 'https://the-birthday-cake-db.p.rapidapi.com/';
  header = new HttpHeaders({
    'X-RapidAPI-Key': '142a30b563msh7cb0b0bcbc43ae8p18392djsnb4b09c6a3c22',
    'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com',
  });
  constructor(private http: HttpClient) {}
  getAllCakes() {
    let param = new HttpParams();
    return this.http.get(this.url);
  }
}
