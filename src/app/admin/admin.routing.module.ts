import { Router, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { AdminUserComponent } from "./component/admin-user/admin-user.component";


const routes: Routes = [{
    path: "",
    component: AdminComponent,
    children: [{
        path: 'user',
        component: AdminUserComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRouting { }