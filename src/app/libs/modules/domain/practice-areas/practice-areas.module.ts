import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeAreasComponent, PracticeAreasProvider } from './practice-areas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PracticeAreasComponent],
  providers: [PracticeAreasProvider],
  imports: [CommonModule, RouterModule],
  exports: [PracticeAreasComponent]
})
export class PracticeAreasModule { }
