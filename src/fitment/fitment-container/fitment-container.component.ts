import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any>;

  // import the store into the constructor
  constructor() {}

  ngOnInit() {}

  getYears() {
    console.log("getYears");

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
