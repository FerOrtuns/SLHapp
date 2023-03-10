import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { InfogmComponent } from './components/infogm/infogm.component';
import { RosterComponent } from './components/roster/roster.component';
import { MiequipoComponent } from './pages/miequipo/miequipo.component';
import { OfertasEnviadasComponent } from './pages/ofertas-enviadas/ofertas-enviadas.component';
import { OfertasRecibidasComponent } from './pages/ofertas-recibidas/ofertas-recibidas.component';

const routes: Routes = [
  {
    path:'',
    component:MiequipoComponent,
    children:[
      {
        path:'infoGMs',
        component: InfogmComponent
      },
      {
        path:'infoGM/:email',
        component: InfogmComponent
      },
      {
        path:'players/:AKA',
        component: RosterComponent
      },
      {
        path:'ofertasEnviadas',
        component: OfertasEnviadasComponent
      },
      {
        path:'ofertasRecibidas',
        component: OfertasRecibidasComponent
      },
      {
        path:'**', redirectTo:''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyteamRoutingModule { }
