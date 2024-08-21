import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, } from '@angular/forms';
import { Location } from '@angular/common';
import { ClientesService } from '../services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../model/clientes';





@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id:[''],
    name: [''],
    category: [''],
    cnpj: [''],
    phone: ['']
  });

  constructor(private formBuilder:NonNullableFormBuilder,
    private service:ClientesService,
    private snackBar: MatSnackBar,
    private location:Location,
    private route:ActivatedRoute,
  ) {

  }


  ngOnInit(): void {
    const clientes: Clientes = this.route.snapshot.data['clientes'];
    this.form.setValue({
      _id:clientes._id,
      name: clientes.name ,
      category: clientes.category,
      cnpj: clientes.cnpj,
      phone: clientes.phone

    });

  }

  onSubmit(){

    this.service.save(this.form.value)
      .subscribe({next: result => this.onSucess(),error: err => {this.onErro();
      }
    });
}

private onSucess(){
  this.snackBar.open('Cliente registrado !!', '', { duration: 5000 });
  this.onCancel();
}

private onErro(){
  this.snackBar.open('Erro ao salvar cliente.', '', { duration: 5000 });
}

  onCancel(){
    this.location.back();

  }
}



