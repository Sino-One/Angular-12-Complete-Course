import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {toDo} from "../models/toDo.model";
import {Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {map} from "rxjs/operators";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-to-doform',
  templateUrl: './to-doform.component.html',
  styleUrls: ['./to-doform.component.css']
})
export class ToDoformComponent implements OnInit, OnChanges {

  @Input() toDo: toDo;
  @Output() save = new EventEmitter<toDo>();
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private toDoService: TodoService,
              private router: Router/*,
              public dialogRef: MatDialogRef<ToDoformComponent>,
              @Inject(MAT_DIALOG_DATA) public data: toDo*/) {
    this.buildform();
  }

  ngOnInit(): void {
  }

  buildform(): void {
    this.formGroup = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      content: ['', Validators.required],
      done: [this.toDo? this.toDo.done : '']
    })
  }

  onSave() {
    this.toDoService.onSave(this.formGroup.value);
    if(this.router.url !== '/todolist'){
      this.router.navigate(['/todolist']);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.formGroup && changes?.toDo) {
      this.formGroup.patchValue(this.toDo);
    }
  }

  onModify() {
    this.toDoService.onModify(<toDo>(this.formGroup.value));
  }

  onCreate() {
    if (this.router.url.includes('todoform')){
      return true
    }
    return false;
  }

}
