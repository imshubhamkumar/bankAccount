import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IAccount } from './account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = '../assets/data/BankAccountAPI.json';

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.url);
  }
}
