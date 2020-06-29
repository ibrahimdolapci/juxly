import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
