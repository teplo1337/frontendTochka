import { Component} from '@angular/core';
import { CharactersService } from '../characters.service';

@Component ({
  selector: 'firstPage-app',
  templateUrl: './firstPage.component.html'
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
