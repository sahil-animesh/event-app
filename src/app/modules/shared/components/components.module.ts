import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AutoCompleteInputComponent } from './auto-complete-input/auto-complete-input.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete'

@NgModule({
  declarations: [
    CarouselComponent,
    AutoCompleteInputComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  exports:[
    CarouselComponent,
    AutoCompleteInputComponent
  ]
})
export class ComponentsModule { }
