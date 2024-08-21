import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../model/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesResolver implements Resolve<Clientes> {

  constructor ( private service:ClientesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Clientes> {
   if (route.params && route.params['id']){
    return this.service.loadById(route.params['id']);
   }
    return of({_id:'', name:'', category:'', cnpj:'', phone: ''}as Clientes);
  }
}
