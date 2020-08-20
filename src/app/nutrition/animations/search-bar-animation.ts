import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const animations = [
  trigger('searchBarPosition', [
    state(
      'initial',
      style({
        position: 'absolute',
        top: '30%',
        width: '100%',
      })
    ),
    state(
      'final',
      style({
        position: 'absolute',
        top: '2%',
        width: '100%',
        'border-bottom': '1px solid #e0e0e0',
      })
    ),
    transition('initial => final', [animate('1s 0.2s ease-in-out')]),
  ]),
];
