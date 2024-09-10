import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../Interfaces/ICompany';
import { environment } from '../../environments/environment'

const ENDPOINT = 'v1/companies';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  constructor(protected http: HttpClient) {}

  getUrlRecurso(): string {
    return environment.serverUrl + ENDPOINT;
  }

  listar(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(this.getUrlRecurso());
  }

  buscar(id: string | null): Observable<ICompany> {
    return this.http.get<ICompany>(`${this.getUrlRecurso()}/${id}`);
  }

  criar(company: ICompany): Observable<ICompany> {
    return this.http.post<ICompany>(this.getUrlRecurso(), company);
  }

  atualizar(id: number, company: ICompany): Observable<ICompany> {
    return this.http.put<ICompany>(`${this.getUrlRecurso()}/${id}`, company);
  }

  detelar(id: number): Observable<ICompany> {
    return this.http.delete<ICompany>(`${this.getUrlRecurso()}/${id}`);
  }

  validateCNPJ(cnpj: string): Observable<any> {
    return this.http.get(`https://minhareceita.org/${cnpj}`);
  }
}
