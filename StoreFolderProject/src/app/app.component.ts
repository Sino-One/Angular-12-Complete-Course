import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {AddFolder, LoadFolders} from "./store/folder.action";
import {Observable, Subscription} from "rxjs";
import {SelectFolder, SelectFolderLoading} from "./store/folder.selector";
import {Dossier} from "./models/dossier.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @Input() dossier: Dossier;
  dossiers: Dossier[] = [];
  loading = true;
  loading$ = new Observable<boolean>();
  dossiers$ = new Observable<Dossier[]>();

  subcription: Subscription[] = [];

  constructor(private store: Store) {
    this.dossiers$ = this.store.select(SelectFolder);
    this.loading$ = this.store.select(SelectFolderLoading);
  }

  ngOnInit() {
    this.subcription.push(this.dossiers$.subscribe(dossiers => this.dossiers = dossiers));
    this.subcription.push(this.loading$.subscribe(loadingState => this.loading = loadingState));
    this.store.dispatch(new LoadFolders());
  }

  onSave(event: Dossier) {
    this.store.dispatch(new AddFolder(event));
  }

  ngOnDestroy() {
    this.subcription.forEach((sub)=> sub.unsubscribe());
  }
}
