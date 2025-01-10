import { Router, RouterModule, Routes } from "@angular/router";
import { ShowroomComponent } from "./showroom.component";
import { NgModule } from "@angular/core";
import { ShowroomListComponent } from "./component/showroom-list/showroom-list.component";


const routes: Routes = [{
    path: "",
    component: ShowroomComponent,
    children: [
        {
            path: 'list',
            component: ShowroomListComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowroomRouting { }