import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  productLines: Subject<any> = new BehaviorSubject<any>(null);

  constructor( private http: HttpClient) { }

  getProductLines () {
    return this.http.get("http://localhost:3000/productLines");
  }

  extractProductLines (response) {
    if (response) {
      let listOfProductLines: [];
      listOfProductLines = response;
      this.productLines.next(listOfProductLines);
    }
  }

  getListOfAllProductLines () {
    this.getProductLines().subscribe(res => {
      this.extractProductLines(res);
    },
    (err: HttpErrorResponse) => console.log(err)
    );
  }
}