import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfComponent } from './pdf/pdf.component';

import { PacientesComponent } from './pacientes/pacientes.component';
import { DoctoresComponent } from './doctores/doctores.component'; 
import { DigitalComponent } from './digital/digital.component';

const routes: Routes =
 [  
  {
    path:'DigitalComponent',
    component:DigitalComponent
  },

  {
    path:'PdfComponent',
    component:PdfComponent
  },

  {
    path:'PacientesComponent',
    component:PacientesComponent
  },

  {
    path:'DoctoresComponent',
    component:DoctoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
