import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-auto-complete-input',
  templateUrl: './auto-complete-input.component.html',
  styleUrls: ['./auto-complete-input.component.scss']
})
export class AutoCompleteInputComponent {
  @Input() inputControl:any = new FormControl('');
  @Input() options: string[] = ['One', 'Two', 'Three'];
  @Input() title: any;
  @Input() placeholder: any;
  filteredOptions: Observable<string[]> | undefined;
  @Input() limit=3;

  ngOnInit() {
    this.filteredOptions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();
    const remaining:any=[];
    const result=this.options.filter((option:any) => {
      if(option.toLowerCase().startsWith(filterValue)){
        return true;
      }
      else{
        return remaining.push(option)&&false;
      }
    });
    if(result.length>0){
      return result.length>this.limit?result:[...result,...(remaining.filter((option: string) => option.toLowerCase().includes(filterValue)))];
    }
    else{
      return [value]
    }
  }
}

