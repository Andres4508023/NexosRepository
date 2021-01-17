import { Component, OnInit } from '@angular/core';
import {NexosService} from './../Services/NexosServices'
import { Pacientes, Doctor } from '../models/NexosModels';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  txtIdDoctor:number;
  constructor(public service: NexosService,
    public toastr: ToastrService){}

    ngOnInit()
    {
        this.service.refreshListPacientes();
        this.service.refreshListDoctor();
        this.GetDoctorPaciente();
    }


  GetDoctorPaciente()
  {
    
    this.service.GetDoctorPaciente(this.txtIdDoctor);
    this.service.listPacientes;
    debugger;
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
