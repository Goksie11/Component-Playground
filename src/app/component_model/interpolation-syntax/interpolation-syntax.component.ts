import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-syntax',
  templateUrl: './interpolation-syntax.component.html',
  styleUrls: ['./interpolation-syntax.component.css'],

  interpolation:['$', '$']

})


export class InterpolationSyntaxComponent implements OnInit {


  ///////////////////// CUSTOM INTERPOLATION SYNTAX /////////////////////

       //////////////////// STEPS TO FOLLOW //////////////////////////


  /*

  1. In component decorator, we can add interpolation array

  2. 0th index value is start of interpolation and 1th index value is end of interpolation

  3. More than 2 index value is not allowed

  */


  //////////////////////////////////  END  /////////////////////////////////////

  data : any

  constructor() { }

  ngOnInit() {


    this.data = ` "Angular allows you to do that by setting the interpolation property of the @Component decorator."`


  }

}
