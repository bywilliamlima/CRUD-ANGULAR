import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../model/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API ='api/clientes';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Clientes[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(clientes=>console.log(clientes))
    );
  }

 loadById(id: string){
  const url = `${this.API}/${id}`;
  return this.httpClient.get<Clientes>(url);
 }

  save(record:Partial <Clientes>) {

    if (record._id) {
      return this.update(record);
    } else {
      return this.create(record);
    }

  }
  private create(record:Partial <Clientes>){
    return this.httpClient.post<Clientes>(this.API, record).pipe(first());
  }

  private update(record:Partial <Clientes>){
    const url = `${this.API}/${record._id}`;
    return this.httpClient.put<Clientes>(url, record).pipe(first());
  }

  remove (id: string){
    const url = `${this.API}/${id}`;
    return this.httpClient.delete(url).pipe(first());
  }





}
