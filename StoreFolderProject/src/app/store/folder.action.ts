import {Dossier} from "../models/dossier.model";
import {Action} from "@ngrx/store";

export enum FolderActionTypes {
  LoadFolders = '[Folder] Load',
  LoadFolderSuccess = '[Folder] Load Success',
  LoadFolderError = '[Folder] Load Error',
  AddFolder = '[Folder] Add Folder',
  ModifyFolder = '[Folder] Modify Folder'
}

export class LoadFolders implements Action {
  readonly type = FolderActionTypes.LoadFolders;

  constructor() {
  }
}

export class LoadFolderSuccess implements Action {
  readonly type = FolderActionTypes.LoadFolderSuccess;

  constructor(public payload: Dossier[]) {
  }
}

export class LoadFolderError implements Action {
  readonly type = FolderActionTypes.LoadFolderError;

  constructor(public payload: any) {
  }
}

export class AddFolder implements Action {
  readonly type = FolderActionTypes.AddFolder;

  constructor(public payload: Dossier) {
  }
}

export class ModifyFolder implements Action {
  readonly type = FolderActionTypes.ModifyFolder;

  constructor(public payload: Dossier) {
  }
}

export type FolderAction = LoadFolders | LoadFolderError | LoadFolderSuccess | AddFolder | ModifyFolder;




