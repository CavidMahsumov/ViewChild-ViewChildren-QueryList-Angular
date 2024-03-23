import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
  standalone:true,
  providers:[
    {provide : "MainProvide",useValue:"Hello world!"}
  ]
})
export class Child1Component {

  x(){
    console.log("Child1 x Function")
  }
}
