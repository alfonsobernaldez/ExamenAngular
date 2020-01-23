import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponentComponent } from './consulta-component/consulta-component.component';
import { ListadoComponentComponent } from './listado-component/listado-component.component';
import { ToledoComponentComponent } from './toledo-component/toledo-component.component';
import { MadridComponentComponent } from './madrid-component/madrid-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponentComponent,
    ListadoComponentComponent,
    ToledoComponentComponent,
    MadridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
