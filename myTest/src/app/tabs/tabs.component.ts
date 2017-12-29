import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  showDescription(tab) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active= true;
  }

  ngAfterContentInit() {
    //child bug
    setTimeout(() => {
      let tab = this.tabs.toArray().filter((x)=> x.checked === true );
      if(tab[0]) tab[0].active= true;
    }, 1);
  }
}
