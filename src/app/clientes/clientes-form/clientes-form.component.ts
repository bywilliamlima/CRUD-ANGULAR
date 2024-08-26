import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
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
    _id: [''],
    name: [''],
    category: [''],
    cnpj: [''],
    phone: [''],
    ie: [''],
  });



  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const clientes: Clientes = this.route.snapshot.data['clientes'];
    this.form.setValue({
      _id: clientes._id,
      name: clientes.name,
      category: clientes.category,
      cnpj: clientes.cnpj,
      phone: clientes.phone,
      ie: clientes.ie
    });


  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe({
        next: result => this.onSucess(),
        error: err => this.onErro()
      });
  }

  private onSucess() {
    this.snackBar.open('Cliente registrado!!', '', { duration: 5000 });
    this.onCancel();
  }

  private onErro() {
    this.snackBar.open('Erro ao salvar cliente.', '', { duration: 5000 });
  }

  onCancel() {
    this.location.back();
  }


  mask: string = '00.000.000/0000-00';
  maxLength: number = 18;


  updateMask(event: Event) {
    let inputValue = (event.target as HTMLInputElement).value;


    if (inputValue.length  < 16) {
      this.mask = '000.000.000-00';
      this.maxLength = 20;

    }
     else {
      this.mask = '00.000.000/0000-00';
      this.maxLength = 20;

  }
}
}
