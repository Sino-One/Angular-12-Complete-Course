import {FolderAction, FolderActionTypes} from "./folder.action";
import {Dossier} from "../models/dossier.model";

export interface DossierState {
  dossiers: Dossier[],
  loading: boolean,
  loaded: boolean
}

export const initialState: DossierState = {
  dossiers: [],
  loading: true,
  loaded: false
}

export function DossierReducer(
  state: DossierState = initialState,
  action: FolderAction
) {
  switch (action.type) {
    case FolderActionTypes.AddFolder:
      return {
        ...state,
        dossiers: [...state.dossiers, action.payload],
        loading: false,
        loaded: true
      };
    case FolderActionTypes.LoadFolders:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case FolderActionTypes.LoadFolderSuccess:
      return {
        ...state,
        dossiers: action.payload,
        loading: false,
        loaded: true
      };
    case FolderActionTypes.LoadFolderError:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }

}
