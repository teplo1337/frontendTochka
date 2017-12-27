import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div [class.active]="active" [hidden]="!active" class="description">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
  @Input('title') title;
  @Input('checked') checked;
  active = false;
}
