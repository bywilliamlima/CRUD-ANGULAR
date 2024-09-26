import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { Clientes } from './model/clientes';
import { ClientesService } from './services/clientes.service';
import { ComfimationDialogComponent } from '../shared/components/error-dialog/comfimation-dialog/comfimation-dialog.component';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes$: Observable<Clientes[]> |null = null;


  //ClientesService:ClientesService;

  constructor(
    private clientesService:ClientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
   ) {

    this.refresh();

   }
   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
   }

  ngOnInit(): void {

    const clientes: Clientes = this.route.snapshot.data['clientes'];
    console.log(clientes);

  }

  onAdd(){

  this.router.navigate(['new'], { relativeTo: this.route});
  }
  onEdit(clientes:Clientes){
    this.router.navigate(['edit',clientes._id], { relativeTo: this.route});

  }

  refresh(){

    this.clientes$ = this.clientesService.list()
    .pipe(
      catchError(error=>{
        this.onError('Erro ao inicializar');
        return of([])
      })
    );

  }

  onRemove(clientes: Clientes) {

    const dialogRef = this.dialog.open(ComfimationDialogComponent,{
      data: 'Tem certeza que deseja remover',
      });

      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result){this.clientesService.remove(clientes._id).subscribe({
          next: () => {
            this.refresh();
            this.snackBar.open('Registro excluído', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          error: (err) => {
            this.onError('Erro ao excluir registro');
            console.error('Erro:', err);
          }
        });

        }

      });




 }
}
