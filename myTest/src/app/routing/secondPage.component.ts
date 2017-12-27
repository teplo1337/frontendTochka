import { Component} from '@angular/core';
import { CharactersService } from '../characters.service';

@Component ({
  selector: 'secondPage-app',
  template: `
    <tabs>
      <tab *ngFor="let character of characters" [checked]="character.checked" [title]="character.name">
        {{character.description}}
      </tab>
    </tabs>
  `
})
export class SecondPageComponent {
  characters: any;

  constructor(public service: CharactersService) {
    this.characters = service.characters;
    console.log(this.characters)
  }
}
