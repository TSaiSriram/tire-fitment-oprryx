import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LoadYears } from '../store/actions/vehicle.action';
import { Store } from '@ngrx/store';
import { VehicleState } from "../store/reducers/vehicle.reducer";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any>;

  // import the store into the constructor
  constructor(private store : Store<VehicleState>) {}

  ngOnInit() {}

  getYears() {
    console.log("getYears");
    this.store.dispatch(new LoadYears())
    // dispatch an action to get array of years
    

    // Year
    // api.mocki.io/v1/bcdf729b
  }

  // Make with year (2021)
  //api.mocki.io/v1/498fe082

  // Model with year and make (Acura)
  // api.mocki.io/v1/dedd816d

  // Trim with year, make, model (RDX)
  // api.mocki.io/v1/dbd6febb
}
