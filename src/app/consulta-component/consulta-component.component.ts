import { Component, OnInit } from '@angular/core';
import { Empleados } from '../Interfaces/empleados';
import { Status } from '../Interfaces/status';
import { DatosService } from '../Servicios/datos.service';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta-component.component.html',
  styleUrls: ['./consulta-component.component.css']
})
export class ConsultaComponentComponent implements OnInit {
  //DECLARACIONES DE VARIABLES
  status = null;
  dato = null;
  idEmpleado: string;
  datEmpleado: string;
  d: Status = {status: '', data: {id: '', employee_name: '', employee_salary: '', employee_age: '', profile_image: ''}};

  empleados: Empleados = {id: '', employee_name: '', employee_salary: '', employee_age: '', profile_image: ''};
  calculo: any;

  constructor(private stat: DatosService) { //CONSTRUCTOR DE OBJETO EMPLEADO PARA LA CONSULTA A LA API
    this.datEmpleado = '';
  }
//NO FUNCIONA EL LLAMAR A 1 SOLO ID, Y NO SE MUY BIEN COMO RESOLVERLO COMO NOS HAS EXPLICADO
  verEmpleadoUnico() {
    this.stat.getUnicoEmpleado(this.idEmpleado).subscribe(status => {this.status = status ; this.calculo = (this.d[''].employee_salary)});
  }//EL

  ngOnInit() {
  }

}
