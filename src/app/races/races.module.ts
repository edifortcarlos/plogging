import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RacesRoutingModule } from "./races-routing.module";
import { RacesComponent } from "./races.component";
import { RaceDetailComponent } from "./race-detail/race-detail.component";
import { RacesService } from "../shared/services/races.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RacesRoutingModule
    ],
    declarations: [
        RacesComponent,
        RaceDetailComponent
    ],
    providers: [
        RacesService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RacesModule { }