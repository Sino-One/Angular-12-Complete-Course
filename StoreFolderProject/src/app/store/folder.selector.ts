import {createFeatureSelector, createSelector} from "@ngrx/store";
import {DossierState} from "./folder.reducer";

export const SelectFeature = createFeatureSelector<DossierState>(
  'Dossiers'
);

export const SelectFolder = createSelector(
  SelectFeature,
  (state: DossierState) => state.dossiers
);

export const SelectFolderLoading = createSelector(
  SelectFeature,
  (state: DossierState) => state.loading
);

export const SelectFolderLoaded = createSelector(
  SelectFeature,
  (state: DossierState) => state.loaded
);
