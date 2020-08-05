import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "home"
}, {
  path: "home",
  loadChildren: () => import('./libs/modules/routed/home/home.module').then(module => module.HomePageModule)
}, {
  path: "about-us",
  loadChildren: () => import('./libs/modules/routed/about-us/about-us.module').then(module => module.AboutUsPageModule)
}, {
  path: "attorney",
  loadChildren: () => import('./libs/modules/routed/attorney/attorney.module').then(module => module.AttorneyPageModule)
}, {
  path: "blog",
  loadChildren: () => import('./libs/modules/routed/blog/blog.module').then(module => module.BlogPageModule)
}, {
  path: "contact",
  loadChildren: () => import('./libs/modules/routed/contact/contact.module').then(module => module.ContactPageModule)
}, {
  path: "practice-area",
  loadChildren: () => import('./libs/modules/routed/practice-area/practice-area.module').then(module => module.PracticeAreaPageModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
