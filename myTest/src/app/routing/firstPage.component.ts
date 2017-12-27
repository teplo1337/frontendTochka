import { Component} from '@angular/core';
import { CharactersService } from '../characters.service';

@Component ({
  selector: 'firstPage-app',
  template: `
    <label>Выберете персонажей:</label>
      <div *ngFor = "let character of characters">
        <label>
          <input  type="checkbox"
                  [checked]="character.checked"
                  (change)="handleCheck(character, $event.target)"
                  />
                  {{character.name}}
        </label>
      </div>
  `
})
export class FirstPageComponent {
  characters: any;

  constructor(public service: CharactersService) {
    this.characters = service.characters.map((x) => {
      x['checked'] = true;
      return x;
    });
    console.log(service.characters)
  }
  handleCheck(eventCharacter, element) {
    this.characters.filter((character) => character ===  eventCharacter)[0]
      .checked = element.checked;
    console.log(this.characters)
  }
}
