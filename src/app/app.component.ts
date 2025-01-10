import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

  }
  title = 'hellow_project';


  onHome() {
    this.router.navigate(['home/1/abc'], { relativeTo: this.route, queryParams: { key: 'admin', id: 2 } });
  }

  onContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

  onWork() {
    this.router.navigate(['work'], { relativeTo: this.route });
  }

  showroom() {
    this.router.navigate(['showroom'], { relativeTo: this.route });
  }

  admin() {
    this.router.navigate(['admin'], { relativeTo: this.route });
  }
}
