import { trigger, state, style, transition, animate } from '@angular/animations';

export const animations = [
  trigger('slideInOut', [
    state('0', style({
      height: '0',
      opacity: 0
    })),
    state('1', style({
      height: '*',
      opacity: 1
    })),
    transition('1 => 0', animate('300ms ease')),
    transition('0 => 1', animate('300ms ease'))
  ])
]
