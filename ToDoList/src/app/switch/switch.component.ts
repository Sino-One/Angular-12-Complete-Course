import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchComponent,
      multi: true
    }
  ]
})
export class SwitchComponent implements OnInit, OnDestroy, ControlValueAccessor {
  formGroup: FormGroup;
  sub: Subscription;
  value: boolean;

  propagateChange: (value:boolean) => void = (value: boolean) => {};
  private onTouched = () => {};

  constructor() {
  }

  writeValue(obj: boolean): void {
    this.value = obj;
  }

    registerOnChange(fn: (value:boolean) => void): void {
       this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
      //  throw new Error('Method not implemented.');
    }

  ngOnInit(): void {
    /*if (this.formGroup == undefined) {
      this.formGroup = this.rootFormGroup.control;
    }*/
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }

  valueChange() {
    this.propagateChange(this.value);
  }
}
