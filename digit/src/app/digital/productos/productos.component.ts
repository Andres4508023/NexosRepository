import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {ServiceFactu} from '../../Services/service-factu'
import { Producto } from '../../models/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
                     public dialogRef: MatDialogRef<ProductosComponent>,
                     public service:ServiceFactu) { }

  ngOnInit() 
  {
    this.service.getListProd();
    this.LimpiarForm();
  }

  ProductForm(item:Producto)
  {
    this.service.formDataProd = Object.assign({}, item)
  }

  LimpiarForm(form?:NgForm)
  {
    if(form !=null)
    form.form.reset();

    this.service.formDataProd =
    {
      
      IdProducto: 0,
      Consecutivo: this.data.Consecutivo,
      Nombre: '',
      Precio: 0,
      Cantidad: 0, 
    }
  }

  OnSubmit(form:NgForm)
  {
    debugger;
      this.InsertCurso(form);
   
  }

  InsertCurso(form:NgForm)
  {
    debugger;
    this.service.postProduct().subscribe(
        res =>
        {
          this.LimpiarForm(form);
      //    this.toastr.success('registro guardado');
          this.service.getListProd();
        },
        err =>
        {
          console.log();
        }
    )
  }

}
