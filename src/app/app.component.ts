import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Portfolio, PortfolioData } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
public portfolio: Portfolio;
// tslint:disable-next-line:no-inferrable-types
public logOpen: boolean = true;
// tslint:disable-next-line:no-inferrable-types
public updateOpen: boolean = true;
// tslint:disable-next-line:no-inferrable-types
public bioOpen: boolean = true;

public ngOnInit(): void {
    this.portfolio = PortfolioData;
    }

public toggleOpen(valueToToggle: string): void {
  switch (valueToToggle) {
    case 'logOpen':
    this.logOpen = !this.logOpen;
    break;
    case 'updateOpen':
    this.updateOpen = !this.updateOpen;
    break;
    case 'updateOpen':
    this.updateOpen = !this.updateOpen;
    break;
    case 'bioOpen':
    this.bioOpen = !this.bioOpen;
    break;
  }
}
}
