import { trigger, animate, style, state, group, animateChild, query, stagger, transition } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
	

	state('void', style({ display: 'none' })),
	
	state('*', style({ display: 'block' })),
	
	transition(':enter', [  //transition('void => *', [
		style({ transform: 'translateX(100%)' }),
		animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
	]),
	
	transition(':leave', [  //transition('* => void', [
		style({ transform: 'translateX(0%)' }),
		animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
	]),

	transition('* <=> *', [
		style({ transform: 'translateX(0%)' }),
		animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
	]),
]);