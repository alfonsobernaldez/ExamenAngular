import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../Interfaces/empleados';
import { Status } from '../Interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getListadoCompleto() {

    const path = 'http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get <Status>(path);
  }
  getUnicoEmpleado(id: string){
    const path = 'http://dummy.restapiexample.com/api/v1/employee/2';
    return this.http.get<Status>(path);
  }
}
