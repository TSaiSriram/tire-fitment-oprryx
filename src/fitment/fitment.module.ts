import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import {  HttpClientModule } from '@angular/common/http';
import { reducers } from './store'
import { EffectsModule } from '@ngrx/effects';
import { TireEffects } from './store/effects/vechile.effect';
import { FitmentContainerComponent } from './fitment-container/fitment-container.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature('fitment', reducers),
    EffectsModule.forRoot([TireEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  declarations: [FitmentContainerComponent],

  exports: [FitmentContainerComponent]
})
export class FitmentModule { }