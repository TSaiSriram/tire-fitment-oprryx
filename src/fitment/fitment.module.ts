import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import {  HttpClientModule } from '@angular/common/http';
import { reducers } from './store'
import { EffectsModule } from '@ngrx/effects';
import { TireEffects } from './store/effects/vechile.effect';
import { FitmentContainerComponent } from './fitment-container/fitment-container.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature('fitment', reducers),
    EffectsModule.forRoot([TireEffects])
  ],
  declarations: [FitmentContainerComponent],

  exports: [FitmentContainerComponent]
})
export class FitmentModule { }