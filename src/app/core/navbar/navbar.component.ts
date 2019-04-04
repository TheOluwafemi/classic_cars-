import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public lines: string[];
  emptyMessage: string;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.getListOfAllProductLines();
    this.getLines();
  }

  getLines () {
    this.navbarService.productLines.subscribe(res => {
      if(res) {
        if (res.length != 0) {
          this.lines = res;
        }
        else if (res.length < 1) {
          this.emptyMessage = "There are no product lines available";
        }
      }
    });
  }

}
