import { Component, OnInit } from '@angular/core';
import {NexosService} from './../Services/NexosServices'
import { Pacientes, Doctor } from '../models/NexosModels';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  txtIdDoctor : number;
  constructor(public service: NexosService,
    public toastr: ToastrService){}

ngOnInit()
{
    this.service.refreshListPacientes();
  //  this.service.refreshListPacientes();
    this.service.refreshListDoctor();
    this.resetForm();
}

populateForm(pd: Pacientes)
{
  this.service.formDataPacientes = Object.assign({}, pd); 
}

  resetForm(form?: NgForm)
  {
      if(form != null)
      form.form.reset();
      this.service.formDataPacientes =
      {
        IdPaciente: 0,
        Nombres: '',
        NumeroSeguro: 0,
        CodigoPostal: '',
        Telefono: 0,
        IdDoctor: 2
      }
  }

  onSubmit(form: NgForm)
  {
    debugger;

    if (this.service.formDataPacientes.IdPaciente == 0)   
      this.insertRecord(form);
    else 
      this.updateRecord(form);
  }

    insertRecord(form: NgForm)
    {
      debugger;


      this.service.PostPaciente().subscribe
      (
        res =>{
                this.resetForm(form);
                this.toastr.success("Registro guardado");
                this.service.refreshListPacientes();
              },
        err =>
        {
          console.log(err);
        }
      )
    }

  updateRecord(form: NgForm)
  {
    this.service.PutPaciente().subscribe
    (
      res =>{
        this.resetForm(form);
        this.toastr.info("registro actualizado");
        this.service.refreshListPacientes();
      },
      err =>{
        console.log(err);
      }
    )
  }
  
  
  onDelete(IdPaciente)
  {
    if (confirm('Are you sure to delete this record ?')) 
    {
      this.service.DeletePaciente(IdPaciente)
        .subscribe(res =>
        {
          this.service.refreshListPacientes();
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
          err => 
          {
            console.log(err);
          })
    }
  }

}
