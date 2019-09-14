import { Component, OnInit } from "@angular/core";

import { PloggingComponent } from "../shared/components/plogging.component";
import { RacesService } from "../shared/services/races.service";
import { StorageService } from "../shared/services/storage.service";

@Component({
    selector: "Races",
    templateUrl: "./races.component.html"
})
export class RacesComponent extends PloggingComponent implements OnInit {

    constructor(
        protected _dataService: RacesService,
        protected _storageService: StorageService,
    ) {
        super(
            _dataService,
            _storageService,
        );
    }
}
