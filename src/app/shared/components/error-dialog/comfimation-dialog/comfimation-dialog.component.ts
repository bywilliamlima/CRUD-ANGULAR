import { Component, Inject, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comfimation-dialog',
  templateUrl: './comfimation-dialog.component.html',
  styleUrls: ['./comfimation-dialog.component.scss']
})
export class ComfimationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ComfimationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:string,
  ) { }

  ngOnInit(): void {
  }

  onConfirm(result: boolean): void {
    this.dialogRef.close(result);

}
}
