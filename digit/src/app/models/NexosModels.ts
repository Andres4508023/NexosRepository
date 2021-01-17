

export class Pacientes
{
    IdPaciente: number;
    Nombres: string;
    NumeroSeguro: number;
    CodigoPostal: string;
    Telefono: number;
    IdDoctor: number;
 }

 export class Doctor
 {
    IdDoctor:number;
    Nombres:string;
    Especialidad:string;
    NumeroCredencial:number;
    Hospital:string;
 }

 export class PacienteDoctor
 {
     Id: number;
     IdPaciente:number;
     IdDoctor:number;
 }