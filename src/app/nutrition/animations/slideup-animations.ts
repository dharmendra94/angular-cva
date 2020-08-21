import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const slideUpAnimation = [
  trigger('slideUp', [
    state('in', style({ transform: 'translateY(0)' })),
    transition(':enter', [
      style({ transform: 'translateY(130%)' }),
      animate('500ms 500ms'),
    ]),
  ]),
];
