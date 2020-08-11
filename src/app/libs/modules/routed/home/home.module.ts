import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent, SliderProvider } from './slider/slider.component';
import { WhoWeAreComponent, WhoWeAreProvider } from './who-we-are/who-we-are.component';
import { VideoInfoComponent, VideoInfoProvider } from './video-info/video-info.component';
import { SuccessComponent, SuccessProvider } from './success/success.component';
import { AttorneyComponent, AttorneyProvider } from './attorney/attorney.component';
import { WhyChooseUsComponent, WhyChooseUsProvider } from './why-choose-us/why-choose-us.component';
import { RequestFormComponent, RequestFormProvider } from './request-form/request-form.component';
import { ClientsComponent, ClientsProvider } from './clients/clients.component';
import { BlogComponent, BlogProvider } from './blog/blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PracticeAreasModule, BlogModule } from '../../domain';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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
  providers: [
    SliderProvider,
    WhoWeAreProvider,
    VideoInfoProvider,
    SuccessProvider,
    AttorneyProvider,
    WhyChooseUsProvider,
    RequestFormProvider,
    ClientsProvider,
    BlogProvider
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    PracticeAreasModule,
    BlogModule,
    LazyLoadImageModule
  ],
  exports: [HomeComponent]
})
export class HomePageModule { }
