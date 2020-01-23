import { Component } from '@angular/core';
import { Empleados } from './Interfaces/empleados';
import { DatosService } from '../app/Servicios/datos.service';
import { Status } from './Interfaces/status';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAngular';
  status = null;
  dato = null;
  idEmpleado: string;
  datEmpleado: string;
  d: Status = {status: '', data: {id: '1', employee_name: '', employee_salary: '', employee_age: '', profile_image: ''}};

  constructor(private stat: DatosService) {
    this.datEmpleado = '';
  }
  calculo(){
    return this.calculo;
  }

  verListadoCompleto() {

    this.stat.getListadoCompleto().subscribe(status => {this.status = status;});

  }
  verEmpleadoUnico() {
    this.stat.getUnicoEmpleado(this.idEmpleado).subscribe(status => {this.d = status; this.calculo = (this.d[0].employee_salary) });
  }
}
