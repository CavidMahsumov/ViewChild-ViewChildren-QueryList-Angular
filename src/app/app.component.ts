import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { ExampleDirectiveDirective } from './directives/example-directive.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true,
  imports:[Child1Component,ExampleDirectiveDirective]
})
export class AppComponent {
  @ViewChild("h") h:ElementRef
  @ViewChild("h",{read:ElementRef}) _h2:ElementRef
  @ViewChild("h",{read:ExampleDirectiveDirective}) _h3:ExampleDirectiveDirective //read Option
  @ViewChild(Child1Component,{read : "MainProvide"}) cc:Child1Component;
  @ViewChild(Child1Component, {static:false}) child1Component:Child1Component
  @ViewChildren("h") _list:QueryList<ElementRef | Child1Component>;

  ngOnInit(): void {
    // console.log(this.child1Component)
  }
  ngAfterViewInit(): void
  {
    console.log(this._list);
    // console.log(this.h)
    // console.log(this.child1Component.x())
    // console.log(this.cc)

  }
}
