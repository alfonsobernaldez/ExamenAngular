import { Component, OnInit } from '@angular/core';

import { DatosService } from '../Servicios/datos.service';
import { Status } from '../Interfaces/status';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.css']
})
export class ListadoComponentComponent implements OnInit {

  status = null;
  dato = null;
  idEmpleado: string;
  datEmpleado: string;
  d: Status = {status: '', data: {id: '', employee_name: '', employee_salary: '', employee_age: '', profile_image: ''}};

  constructor(private stat: DatosService) {
    this.datEmpleado = '';
  }

  calculo() {
    return this.calculo;
  }

  verListadoCompleto() { //CONSULTA DE TODA LA API

    this.stat.getListadoCompleto().subscribe(status => {this.status = status; });

  }
  ngOnInit() {
  }

}
