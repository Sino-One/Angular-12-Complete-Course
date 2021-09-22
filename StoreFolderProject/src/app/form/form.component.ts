import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Dossier} from "../models/dossier.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  formGroup: FormGroup;
  @Input() dossier: Dossier;
  @Output() save = new EventEmitter<Dossier>();

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.formGroup && changes && changes.dossier) {
      this.formGroup.patchValue(this.dossier);
    }
  }

  buildForm(): void {
    this.formGroup = this.fb.group({
      id : ['', [Validators.required]],
      numero: ['', [Validators.required]]
    })
  }

  onSave() {
    this.save.emit({
      ...this.formGroup.value
    })
  }

}
