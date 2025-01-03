import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { WorkComponent } from "./work/work.component";

const routes: Routes = [
    {
        path: "home/:id/:data",
        component: HomeComponent,
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'work',
        component: WorkComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }