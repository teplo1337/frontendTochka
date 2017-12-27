import { Component} from '@angular/core';
import { CharactersService } from '../characters.service';

@Component ({
  selector: 'firstPage-app',
  template: `
  <div id="selector">
    <h2>Список персонажей</h2><br>
    <p>Выберете персонажей:</p>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th><input  type="checkbox"
              (change)="selectAll()"
              [checked]="selection"/>
          </th>
          <th>Character</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let character of characters">
          <td><input  type="checkbox"
                [checked]="character.checked"
                (change)="handleCheck(character, $event.target)"
                />
          </td>
          <td>{{character.name}}
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class FirstPageComponent {
  characters: any;
  selection: boolean = true;

  constructor(public service: CharactersService) {
    this.characters = service.characters.map((myCharacter) => {
      myCharacter['checked'] = this.selection;
      return myCharacter;
    });
    console.log(service.characters)
  }

  selectAll () {
    this.selection = !this.selection;
    this.characters = this.characters.map((character) => {
      character.checked = this.selection;
      return character;
    });

  }

  handleCheck (eventCharacter, element) {
    this.selection = false;
    this.characters.filter((character) => character ===  eventCharacter)[0]
      .checked = element.checked;
    console.log(this.characters)
  }
}
