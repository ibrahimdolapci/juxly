import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { VideoInfoComponent } from './video-info/video-info.component';
import { SuccessComponent } from './success/success.component';
import { AttorneyComponent } from './attorney/attorney.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { ClientsComponent } from './clients/clients.component';
import { BlogComponent } from './blog/blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PracticeAreasModule, BlogModule } from '../../domain';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
}];

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    WhoWeAreComponent,
    VideoInfoComponent,
    SuccessComponent,
    AttorneyComponent,
    WhyChooseUsComponent,
    RequestFormComponent,
    ClientsComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    PracticeAreasModule,
    BlogModule
  ],
  exports: [HomeComponent]
})
export class HomePageModule { }
