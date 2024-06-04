import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/Shared';
import { categoryDTOs } from '../model/categorys.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getData(): Observable<categoryDTOs[]> {
    return this.http.get<categoryDTOs[]>(`${_shared.api}/api/Category`);
  }
}
