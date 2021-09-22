import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
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
export class SwitchComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  sub: Subscription;
  private propagateChange = (_:any) => {};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      done: ['']
    });

    this.sub = this.formGroup.valueChanges.subscribe(changes => {
      this.propagateChange(changes);
    })
  }

  registerOnTouched(fn: any) {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  writeValue(obj: any): void {
    if (obj) {
      this.formGroup.patchValue(obj);
    }
  }

  public validate(c: FormControl) {
    return null;
  }

}
