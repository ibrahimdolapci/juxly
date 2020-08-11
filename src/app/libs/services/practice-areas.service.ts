import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeAreasService {

  list = [{
    icon: 'real-estate',
    name: 'Real Estate Law',
    link: '/practice-area-detail/real-estate-law'
  }, {
    icon: 'transportation',
    name: 'Transportation Law',
    link: '/practice-area-detail/transportation-law'
  }, {
    icon: 'family',
    name: 'Divorce and Family Law',
    link: '/practice-area-detail/divorce-and-family-law'
  }, {
    icon: 'criminal',
    name: 'Criminal Cases',
    link: '/practice-area-detail/criminal-cases'
  }, {
    icon: 'drug',
    name: 'Drug Offence',
    link: '/practice-area-detail/drug-offence'
  }, {
    icon: 'market',
    name: 'Capital Market',
    link: '/practice-area-detail/capital-market'
  }];

  constructor() { }
}
