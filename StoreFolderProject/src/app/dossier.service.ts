import {Observable, of} from "rxjs";
import {Dossier} from "./models/dossier.model";
import {delay} from "rxjs/operators";


export class DossierService {

  findAll(): Observable<Dossier[]> {
    return of([
      {
        id: 0,
        numero: 'AA01'
      },
      {
        id: 1,
        numero: 'AB02'
      },
      {
        id: 2,
        numero: 'AC03'
      },
      {
        id: 3,
        numero: 'AD04'
      },
    ]).pipe(delay(2000));
  }
  constructor() { }
}
