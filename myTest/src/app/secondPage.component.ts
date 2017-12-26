import { Component} from '@angular/core';
import { CharactersService } from './characters.service';

@Component ({
  selector: 'secondPage-app',
  template: `
    <label>Выберете персонажей:</label>
      <div *ngFor = "let character of characters">
        <label *ngIf = "character.checked">
          <input  type="checkbox"
                  [checked]="character.checked"
                  />
                  {{character.name}}
        </label>
      </div>
  `
})
export class SecondPageComponent {
  characters: any;

  constructor(public service: CharactersService) {
    this.characters = service.characters;
  }
}
