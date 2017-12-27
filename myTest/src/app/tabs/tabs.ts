import { Component, ContentChildren, QueryList } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'tabs',
  template:`
    <ul class="nav nav-pills">
        <li *ngFor="let tab of tabs"
        [class.active]="tab.active"
        (click)="showDescription(tab)">
          <a *ngIf="tab.checked" href="/result#" data-toggle="tab">{{tab.title}}</a>
        </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class Tabs {

  @ContentChildren(Tab) tabs: QueryList<Tab>;

  showDescription(tab) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active= true;
  }

  ngAfterContentInit() {
    setTimeout(() => {
      let tab = this.tabs.toArray().filter((x)=> x.checked === true );
      if(tab[0]) tab[0].active= true;
    }, 1);
  }
}
