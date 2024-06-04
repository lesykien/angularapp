import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order, orderDTOs, orderSingle } from '../model/order.model';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/Shared';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  create(model: order) {
    return this.http.post(`${_shared.api}/api/Orders/orders`, model);
  }

  getData(): Observable<orderDTOs[]> {
    return this.http.get<orderDTOs[]>(
      `${_shared.api}/api/Orders/get-all-orders`
    );
  }

  getById(id: number): Observable<orderSingle> {
    return this.http.get<orderSingle>(
      `${_shared.api}/api/Orders/get-order-by-id/${id}`
    );
  }
}
