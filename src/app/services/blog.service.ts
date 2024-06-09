import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { _shared } from '../Shared/Shared';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any>(`${_shared.api}/api/Blog/get-all`);
  }
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${_shared.api}/api/Blog/get-blog-by-id/${id}`);
  }

  getByNumber(): Observable<any[]> {
    return this.http.get<any[]>(`${_shared.api}/api/Blog/get-blog-by-number/3`);
  }
}
