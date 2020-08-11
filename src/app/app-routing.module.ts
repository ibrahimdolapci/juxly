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
  path: "practice-areas",
  loadChildren: () => import('./libs/modules/routed/practice-areas/practice-areas.module').then(module => module.PracticeAreasPageModule)
}, {
  path: 'practice-area-detail',
  loadChildren: () => import('./libs/modules/routed/practice-area-detail/practice-area-detail.module').then(module => module.PracticeAreaDetailModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
