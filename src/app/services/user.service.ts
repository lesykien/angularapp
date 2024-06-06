import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/Shared';
import { createDTOs, user } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(form: FormData, userName: string): Observable<user> {
    return this.http.post<user>(
      `${_shared.api}/Login?userName=${userName}`,
      form
    );
  }

  getById(id: number): Observable<user> {
    return this.http.get<user>(`${_shared.api}/api/Account/${id}`);
  }

  create(model: createDTOs): Observable<any> {
    return this.http.post(`${_shared.api}/api/Account`, model);
  }
}
