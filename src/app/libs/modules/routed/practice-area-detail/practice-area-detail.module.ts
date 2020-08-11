import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeAreaDetailComponent } from './practice-area-detail.component';
import { Routes, RouterModule } from '@angular/router';
import {
  RealEstateLawComponent,
  CriminalCasesComponent,
  TrasportationLawComponent,
  DivorceAndFamilyLawComponent,
  ConstructionMattersComponent,
  DrugOffenceComponent,
  BusinessLawComponent,
  CapitalMarketComponent,
} from './areas';
import { ComponentsModule } from '@libs/components';
import { ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  {
    path: '',
    component: PracticeAreaDetailComponent,
    children: [
      {
        path: 'real-estate-law',
        component: RealEstateLawComponent,
        data: {
          breadcrumb: {
            title: 'Real Estate Law',
            links: [
              {
                name: 'Home',
                path: '/home',
              },
              {
                name: 'Practice Areas',
                path: '/practice-areas',
              },
              {
                name: 'Real Estate Law',
                path: '/practice-area-detail/real-estate-law',
              },
            ],
          },
        },
      },
      {
        path: 'criminal-cases',
        component: CriminalCasesComponent,
        data: {
          breadcrumb: {
            title: 'Criminal Cases',
            links: [
              {
                name: 'Home',
                path: '/home',
              },
              {
                name: 'Practice Areas',
                path: '/practice-areas',
              },
              {
                name: 'Criminal Cases',
                path: '/practice-area-detail/criminal-cases',
              },
            ],
          },
        },
      },
      {
        path: 'transportation-law',
        component: TrasportationLawComponent,
        data: {
          breadcrumb: {
            title: 'Transportation Law',
            links: [
              {
                name: 'Home',
                path: 'home',
              },
              {
                name: 'Practice Areas',
                path: '/practice-areas',
              },
              {
                name: 'Transportation Law',
                path: '/practice-area-detail/transportation-law',
              },
            ],
          },
        },
      },
      {
        path: 'divorce-and-family-law',
        component: DivorceAndFamilyLawComponent,
        data: {
          breadcrumb: {
            title: 'Divorce And Family Law',
            links: [
              {
                name: 'Home',
                path: '/home',
              },
              {
                name: 'Practice Areas',
                path: '/practice-areas',
              },
              {
                name: 'Divorce And Family Law',
                path: '/practice-area-detail/divorce-and-family-law',
              },
            ],
          },
        },
      },
      {
        path: 'construction-matters',
        component: ConstructionMattersComponent,
        data: {
          breadcrumb: {
            title: 'Construction Matters',
            links: [
              {
                name: 'Home',
                path: '/home',
              },
              {
                name: 'Practice Areas',
                path: '/practice-areas',
              },
              {
                name: 'Construction Matters',
                path: '/practice-area-detail/construction-matters',
              },
            ],
          },
        },
      },
      {
        path: 'drug-offence',
        component: DrugOffenceComponent,
        data: {
          breadcrumb: {
            title: 'Drug Offence',
            links: [
              {
                name: 'Home',
                path: '/home',
              },
              {
                name: 'Practice Areas',
                path: '/practice-areas',
              },
              {
                name: 'Drug Offence',
                path: '/practice-area-detail/drug-offence',
              },
            ],
          },
        },
      },
      {
        path: 'business-law',
        component: BusinessLawComponent,
        data: {
          breadcrumb: {
            title: 'Business Law',
            links: [
              {
                name: 'Home',
                path: '/home',
              },
              {
                name: 'Practice Areas',
                path: '/practice-areas',
              },
              {
                name: 'Business Law',
                path: '/practice-area-detail/business-law',
              },
            ],
          },
        },
      },
      {
        path: 'capital-market',
        component: CapitalMarketComponent,
        data: {
          breadcrumb: {
            title: 'Capital Market',
            links: [
              {
                name: 'Home',
                path: '/home',
              },
              {
                name: 'Practice Areas',
                path: '/practice-areas',
              },
              {
                name: 'Capital Market',
                path: '/practice-area-detail/capital-market',
              },
            ],
          },
        },
      },
    ],
  },
];

@NgModule({
  declarations: [
    RealEstateLawComponent,
    CriminalCasesComponent,
    TrasportationLawComponent,
    DivorceAndFamilyLawComponent,
    ConstructionMattersComponent,
    DrugOffenceComponent,
    BusinessLawComponent,
    CapitalMarketComponent,
    PracticeAreaDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    LazyLoadImageModule
  ],
})
export class PracticeAreaDetailModule { }
