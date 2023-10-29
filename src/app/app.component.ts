import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { componentList } from './json/component_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('500ms ease-out')),
      transition('* => void', animate('200ms ease-in'))
    ])
  ]
})
export class AppComponent {
  showMenu: boolean = false;
  title = 'component-playground';

  componentList = componentList

  constructor( private router: Router ){

  }


  ngOnInit(){

  this.router.navigate(['infinity-scroll'])

  }

  toggleMenu(){
    this.showMenu = !this.showMenu
  }

  goToPage(selectedData){

    this.router.navigate([selectedData.route])

  }




}
