import { Component } from "@angular/core";

@Component({
    selector: 'buttoncountangular',
    templateUrl: './counter.component.html',
})

export class CounterComponent{
    count = 0;

    countUp(){
    this.count++;
  }
  }

  