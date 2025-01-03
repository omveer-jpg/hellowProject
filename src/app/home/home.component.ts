import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.Component.html'
})
export class HomeComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }


    ngOnInit(): void {
        console.log(this.route);

        console.log(this.route.snapshot.queryParams);

        console.log(this.route.snapshot.paramMap.get('id'));

        this.route.queryParams.subscribe(x => {
            console.log(x);
        });


        this.route.params.subscribe(x => {
            console.log(x);
        });
    }
}