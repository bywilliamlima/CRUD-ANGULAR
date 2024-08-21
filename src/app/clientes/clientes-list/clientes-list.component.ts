import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clientes } from '../model/clientes';


@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

 @Input() clientes: Clientes[] = [];
 @Output() add = new EventEmitter(false);
 @Output() edit = new EventEmitter(false);
 @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name','category','cnpj','phone','dataCadastro','action',]

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
  }
  onEdit( clientes:Clientes ){
    this.edit.emit(clientes);

  }
  onDelete(clientes:Clientes){
    this.remove.emit(clientes);

  }
}
