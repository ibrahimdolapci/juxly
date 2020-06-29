import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './libs';


const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "home"
}, {
  path: "home",
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
