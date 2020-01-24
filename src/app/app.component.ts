import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAngular';

  constructor( private router: Router) { }



  irMadrid() {

    this.router.navigate(['Madrid']);
  }
  irToledo() {

    this.router.navigate(['Toledo']);
  }
  irJson() {
    this.router.navigate(['Listado']);
  }
  irConsulta() {
    this.router.navigate (['Consulta']);
  }

}
