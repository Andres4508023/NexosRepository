import { Pacientes, Doctor, PacienteDoctor } from '../models/NexosModels';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable
({
    providedIn: 'root' 
})

export class NexosService
{
    formDataPacientes:Pacientes;
    formDataDoctor:Doctor;
  
    listPacientes: Pacientes[];
    listDoctor:Doctor[];

    readonly rootURL = ' https://localhost:44371/api';  

    

    constructor(public Http: HttpClient) {}

    refreshListPacientes()
    {
       
        this.Http.get(this.rootURL + '/Pacientes')
        .toPromise()
        .then(res => this.listPacientes = res as Pacientes[]);
      
    }


    PostPaciente() 
    { 
      
         return this.Http.post(this.rootURL + '/Pacientes', this.formDataPacientes);
      
    }

    PutPaciente()
    {
        return this.Http.put(this.rootURL + '/Pacientes/' + this.formDataPacientes.IdPaciente, this.formDataPacientes);
    }

    DeletePaciente(IdPaciente)
    {
        debugger;
        return this.Http.delete(this.rootURL + '/Pacientes/' + IdPaciente);
        debugger;
    }

    refreshListDoctor()
    {   
        this.Http.get(this.rootURL + '/Doctors')
        .toPromise()
        .then(res => this.listDoctor = res as Doctor[]);
    }

    GetDoctorPaciente(IdDoctor)
    {
        debugger;
        this.Http.get(this.rootURL + '/Doctors/'+ IdDoctor)
        .toPromise()
        .then(res => this.listPacientes = res as Pacientes[]);
    }

    PostDoctor()
    {
        return this.Http.post(this.rootURL + '/Doctors', this.formDataDoctor);
    }



  
}