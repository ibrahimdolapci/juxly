import { Component, OnInit } from '@angular/core';
import { animations } from '@libs/animation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PracticeAreasService } from '@libs/services';

@Component({
  selector: 'app-real-estate-law',
  templateUrl: './real-estate-law.component.html',
  styleUrls: ['./real-estate-law.component.scss'],
  animations:animations
})
export class RealEstateLawComponent implements OnInit {

  activeIndex = 0;

  items = [{
    title: 'Expert Lawyer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }, {
    title: 'Fast Support',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }, {
    title: 'Free Consultations',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }, {
    title: 'Lowers Cost',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, public practiceAreaService: PracticeAreasService) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
