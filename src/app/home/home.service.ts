import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '<origin> | *'
  })
};


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  employeeList: Subject<any> = new BehaviorSubject<any>(null);
  emp$ = this.employeeList.asObservable();

  constructor(private http: HttpClient) { }

  getAllEmployees () {
    return this.http.get('http://localhost:3000/employees');
  }

  extractEmployees(response) {
    if (response) {
      let listOfAllEmployees: [];
      listOfAllEmployees = response;
      this.employeeList.next(listOfAllEmployees);
    }
  }

  getListOfAllEmployees () {
    this.getAllEmployees().subscribe(res => {
      this.extractEmployees(res);
    },
    (err: HttpErrorResponse) => console.log(err)
    );
  }

}