import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyteamRoutingModule } from './myteam-routing.module';
import { MiequipoComponent } from './pages/miequipo/miequipo.component';
import { DashboardModule } from "../dashboard.module";
import { MaterialModule } from 'src/app/material/material.module';
import { InfogmComponent } from './components/infogm/infogm.component';
import { RosterComponent } from './components/roster/roster.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        InfogmComponent,
        MiequipoComponent,
        RosterComponent,
    ],
    imports: [
        CommonModule,
        MyteamRoutingModule,
        DashboardModule, // no se si es lo mejor para traer el app nav.. revisar TODO:
        MaterialModule,
        ReactiveFormsModule
    ],
    exports:[
        RosterComponent
    ]
})
export class MyteamModule { }
