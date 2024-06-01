import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from '../model/order.model';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/Shared';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  create(model: order) {
    return this.http.post(`${_shared.api}/api/OrdersControllers/orders`, model);
  }
}
