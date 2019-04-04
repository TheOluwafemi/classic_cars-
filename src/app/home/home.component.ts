import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public employees;
  public emptyMessage: string;

  constructor(
    private homeService: HomeService,
    private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.ngxService.start();
    this.homeService.getListOfAllEmployees();
    this.getEmp();
    this.ngxService.stop(); 
  }
  
  getEmp () {
    this.homeService.employeeList.subscribe(res => {
      if (res) {
        if (res.length != 0) {
          this.employees = res;
        }
        else if (res.length < 1) {
          this.emptyMessage = "There are no employees in this company, maybe you should hire more people"
        }
      }
    });
  }

}


