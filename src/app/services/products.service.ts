import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/Shared';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getAllData():Observable<any>{
    return this.http.get<any>(`${_shared.api}/api/Product/get-all-product`)
  }
}
