import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ContactComponent }]),
    ComponentsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDERX1AbFpcYgEyluJ25BavLjbEAN-At3o' }),
    ReactiveFormsModule
  ]
})
export class ContactPageModule { }
