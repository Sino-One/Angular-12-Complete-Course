import {createFeatureSelector, createSelector} from "@ngrx/store";
import {toDoState} from "./toDo.reducer";

export const SelectFeature = createFeatureSelector<toDoState>(
  'Todo'
);

export const SelectToDo = createSelector(
  SelectFeature,
  (state: toDoState) => state.toDos
);

export const SelectToDoLoading = createSelector(
  SelectFeature,
  (state: toDoState) => state.loading
);

export const SelectToDoLoaded = createSelector(
  SelectFeature,
  (state: toDoState) => state.loaded
);
