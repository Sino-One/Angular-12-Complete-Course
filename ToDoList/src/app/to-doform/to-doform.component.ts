import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {toDo} from "../models/toDo.model";
import {AddToDo} from "../store/toDo.action";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-to-doform',
  templateUrl: './to-doform.component.html',
  styleUrls: ['./to-doform.component.css']
})
export class ToDoformComponent implements OnInit, OnChanges {

  @Input() toDo: toDo;
  @Output() save = new EventEmitter<toDo>();
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.buildform();
  }

  buildform(): void {
    this.formGroup = this.fb.group({
      id: [''],
      content: ['', Validators.required],
      done: ['']
    })
  }

  onSave() {
    console.log(this.formGroup.value)
    this.store.dispatch(new AddToDo(<toDo>(this.formGroup.value)));
    if(this.router.url !== '/todolist'){
      this.router.navigate(['/todolist']);
    }

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.formGroup && changes && changes.toDo) {
      this.formGroup.patchValue(this.toDo);
    }
  }

}
