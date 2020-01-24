import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../Interfaces/empleados';
import { Status } from '../Interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  path: string;

//CONEXIONES NECESARIAS CON EL LINK DE LA API
  constructor(private http: HttpClient) {
    this.path = 'http://dummy.restapiexample.com/api/v1/employees'
  }

  getListadoCompleto() {

    const path = 'http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get <Status>(path);
  }
  getUnicoEmpleado(id: string) {

    const path = 'http://dummy.restapiexample.com/api/v1/employees' + id;
    return this.http.get<Empleados>(path);
  }
}
