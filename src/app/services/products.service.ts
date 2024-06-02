import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/Shared';
import { products, productsDetal } from '../model/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<products[]> {
    return this.http.get<products[]>(`${_shared.api}/*api/Product`);
  }
  getById(id: number): Observable<productsDetal[]> {
    return this.http.get<productsDetal[]>(`${_shared.api}/*api/Product/${id}`);
  }
}
