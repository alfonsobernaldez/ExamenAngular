import { Component, OnInit } from '@angular/core';
import { Empleados } from '../Interfaces/empleados';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta-component.component.html',
  styleUrls: ['./consulta-component.component.css']
})
export class ConsultaComponentComponent implements OnInit {

  empleados: Empleados = {id: '', employee_name: '', employee_salary: '', employee_age: '', profile_image: ''};

  constructor() { }


  submit() {

    console.log(this.empleados);
  }

  ngOnInit() {
  }

}
