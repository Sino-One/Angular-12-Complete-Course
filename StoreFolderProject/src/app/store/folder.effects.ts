import {DossierService} from "../dossier.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";
import {FolderActionTypes, LoadFolderError, LoadFolders, LoadFolderSuccess} from "./folder.action";
import {Injectable} from "@angular/core";

@Injectable()
export class FolderEffects {
  constructor(private dossierService: DossierService, private actions$: Actions) {
  }

  loadEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadFolders>(FolderActionTypes.LoadFolders),
      switchMap((action) => this.dossierService.findAll().pipe(
          tap(()=> console.log('try to load dossiers')),
          map(dossiers => {
           return new LoadFolderSuccess(dossiers)
          }),
          catchError(error => of(new LoadFolderError(error)))
        )
)
    )
  );
}
