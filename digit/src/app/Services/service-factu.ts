import { Clientes } from './../models/cliente';
import { Producto } from './../models/producto';

import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable
({
    providedIn: 'root' 
})


export class ServiceFactu {

    formData: Clientes;
    listData: Clientes[];
 
    formDataProd: Producto;
    listDataProd:Producto[];

    constructor(public Http: HttpClient) {}
 
 
    getListDetail()
    {
        debugger;
        this.Http.get(environment.apiURL + '/Clientes').toPromise()
        .then(res => this.listData = res as Clientes[]);
        debugger;
    }
    
    postClient()
    {
        debugger;
        return this.Http.post(environment.apiURL + '/Clientes', this.formData);
        debugger;
    }

    putClient()
    {
        debugger
        return this.Http.put(environment.apiURL + '/Clientes/' + this.formData.IdPersona, this.formData);
        debugger;
    }

    deleteClient(IdPersona)
    {
        debugger;
        return this.Http.delete(environment.apiURL + '/Clientes/' + IdPersona);
    }

    getListProd()
    {
        debugger;
        this.Http.get(environment.apiURL + '/Productos').toPromise()
        .then(res => this.listDataProd = res as Producto[]);
        debugger;
    }

    postProduct()
    {
        debugger;
        return this.Http.post(environment.apiURL + '/Productos', this.formDataProd);
    }

    putProduct()
    {
        debugger;
        return this.Http.put(environment.apiURL + '/Productos/'+this.formDataProd.IdProducto, this.formDataProd);
        debugger;
    }

    deleteProducto(IdProducto)
    {
        debugger;
        return this.Http.delete(environment.apiURL + '/Productos/' + IdProducto);
    }

}




