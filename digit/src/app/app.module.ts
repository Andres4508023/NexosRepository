import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import {MatDialogModule} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { ToastrModule } from 'ngx-toastr';


// Formularios
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// Servicios -------------------
import {HttpClientModule} from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';

// componentes agregados de tablas ...
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { DigitalComponent } from './digital/digital.component';
import { ProductosComponent } from './digital/productos/productos.component';
import { ListFacturaComponent } from './digital/list-factura/list-factura.component';
import { PdfComponent } from './pdf/pdf.component';
//import { OrdersComponent } from './orders/orders.component';
import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';
import { PacientesComponent } from './pacientes/pacientes.component';
import { DoctoresComponent } from './doctores/doctores.component'; 

 
@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    DigitalComponent,
    ProductosComponent,
    ListFacturaComponent,
    PdfComponent,
    PacientesComponent,
    DoctoresComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatBottomSheetModule,
    MatButtonToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }

