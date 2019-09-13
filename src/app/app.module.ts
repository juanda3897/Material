import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import {MatAutocompleteModule, MatInputModule, MatCheckbox, MatCheckboxModule, MatRadioButton, MatRadioModule } from '@angular/material';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormfieldComponent } from './components/formfield/formfield.component';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlidetoggleComponent } from './components/slidetoggle/slidetoggle.component';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    SliderComponent,
    SlidetoggleComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
