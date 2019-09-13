import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map,startWith} from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

    constructor(){}

  title = 'nuevecomponentes';
  options:string[] =['Cédula Ciudadanía','Pasaporte','Tarjeta Identidad'];
 
 myControl= new FormControl();
 filteredOptions:Observable<string[]>;
 
 ngOnInit(){
   this.filteredOptions = this.myControl.valueChanges.pipe(
     startWith(''),
     map(value => this._filter(value))

   );

 }
private _filter(value: string): string[] {
  const filterValue =value.toLocaleLowerCase();
      return this.options.filter(option  => option.toLowerCase().includes(filterValue)
  );

}
displayFn(subject){
  return subject ? subject.name :undefined;
}
  
}