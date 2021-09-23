import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {toDo} from "../models/toDo.model";
import {Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {Store} from "@ngrx/store";
import {AddToDo, ModifyToDo} from "../store/toDo.action";

@Component({
  selector: 'app-to-doform',
  templateUrl: './to-doform.component.html',
  styleUrls: ['./to-doform.component.css']
})
export class ToDoformComponent implements OnInit {

  @Input() toDo: toDo;
  @Input() toDoList: toDo[];
  @Output() save = new EventEmitter<toDo>();
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private toDoService: TodoService,
              private router: Router, private store: Store
              /*,
              public dialogRef: MatDialogRef<ToDoformComponent>,
              @Inject(MAT_DIALOG_DATA) public data: toDo*/) {
  }

  ngOnInit(): void {
    this.buildform();
  }

  buildform(): void {
    this.formGroup = this.fb.group({
      id: [this.toDo? this.toDo.id : '', [
            Validators.required,
            Validators.pattern(/^[0-9]\d*$/),
            this.idValidator
      ]],
      content: [this.toDo? this.toDo.content : '', Validators.required],
      done: [this.toDo? this.toDo.done : '']
    })
  }

  idValidator(control: AbstractControl): ValidatorFn {
    let isValid = undefined;
    this?.toDoList.forEach(todo => {
      if (todo.id == control.value) {
        isValid = {forbiddenId: {value: control.value}};
      } else {
        isValid = null;
      }
    });
    return isValid
  }

  onSave() {
    this.store.dispatch(new AddToDo(this.toDo));
    if(this.router.url !== '/todolist'){
      this.router.navigate(['/todolist']);
    }
  }

  onModify() {
    this.store.dispatch(new ModifyToDo(this.formGroup.value));
  }

  onCreate() {
    if (this.router.url.includes('todoform')) {
      return true
    }
    return false;
  }
}
