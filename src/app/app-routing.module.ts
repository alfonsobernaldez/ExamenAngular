import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MadridComponentComponent } from './madrid-component/madrid-component.component';
import { ToledoComponentComponent } from './toledo-component/toledo-component.component';
import { ListadoComponentComponent } from './listado-component/listado-component.component';
import { ConsultaComponentComponent } from './consulta-component/consulta-component.component';

const routes: Routes = [{
  path: 'Madrid',
  component: MadridComponentComponent

},
{ path: 'Toledo',
  component: ToledoComponentComponent

},
{ path: 'Listado',
  component: ListadoComponentComponent

},
{ path: 'Consulta',
  component: ConsultaComponentComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
