import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TireService {
  private YEARS_URL = "https://https://api.mocki.io/v1/bcdf729b";
  constructor(private http: HttpClient) { }

  getTireYear() {
    return this.http.get<Array<TireService>>(this.YEARS_URL);
  }

}
