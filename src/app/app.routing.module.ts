import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { WorkComponent } from "./work/work.component";
import { Child1Component } from "./home/child1/child1.component";
import { Child2Component } from "./home/child2/child2.component";
import { LoadGuard } from "./load.guard";

const routes: Routes = [
    {
        path: "home/:id/:data",
        component: HomeComponent,
        children: [{
            path: 'child1',
            component: Child1Component
        }, {
            path: 'child2',
            component: Child2Component
        }
        ]
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'work',
        component: WorkComponent
    },
    {
        path: "showroom",
        loadChildren: () => import('./showroom/showroom.module').then(m => m.ShowroomModule),
        canLoad: [LoadGuard]
    },
    {
        path: "admin",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }