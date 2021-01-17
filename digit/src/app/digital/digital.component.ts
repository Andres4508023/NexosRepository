import { Component, OnInit } from '@angular/core';
import {ServiceFactu} from './../Services/service-factu'
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import {Clientes} from '../models/cliente';
import { ProductosComponent } from './productos/productos.component';

import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {

  constructor(public service:ServiceFactu,
    public http:HttpClient, public toastr:ToastrService,
    private dialog: MatDialog) { }

  ngOnInit() 
  {
    this.service.getListDetail();
    this.resetForm();
  }

  clientForm(cl: Clientes)
  {
    debugger;
    this.service.formData = Object.assign({}, cl);
  }

  resetForm(form?: NgForm)
  {
      if(form != null)
      form.form.reset();
      this.service.formData =
      {
        IdPersona:0,
        Consecutivo : Math.floor(100000 + Math.random() * 900000).toString(),
        NumeroIdentificacion: 0,
        Nombres:'',
        Apellidos: '',
        FechaNacimiento: null,
        Telefono:0,
        FormaPago : ''
      } 
  }

  onSubmit(form: NgForm)
  {
    if (this.service.formData.IdPersona == 0)
      this.insertRecord(form);
    else 
      this.updateRecord(form);
  }

  insertRecord(form: NgForm)
  {
    debugger;
    this.service.postClient().subscribe(
      res =>
      {
              this.resetForm(form);
              this.toastr.success('registro guardado');    
              this.service.getListDetail();
      },
      err =>
      {
        console.log(err);
      }
    )
  }

    updateRecord(form: NgForm)
  {
    this.service.putClient().subscribe
    (
      res =>{
        this.resetForm(form);
        this.toastr.info('registro actualizado');
        this.service.getListDetail();
      },
      err =>{
        console.log(err);
      }
    )
  }

  
  onDelete(IdPersona)
  {
    if (confirm('EL registro se eliminara?')) 
    {
      this.service.deleteClient(IdPersona)
        .subscribe(res =>
        {
          this.service.getListDetail();
          this.toastr.warning('Registro Eliminadoss');
        },
          err => 
          {
            console.log(err);
          })
    }

  }

AddProduct(consecutivo)
{
  debugger; 
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "70%";
  dialogConfig.data = {consecutivo};
  this.dialog.open(ProductosComponent, dialogConfig).afterClosed();
}



}
