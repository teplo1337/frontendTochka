import { Component} from '@angular/core';
import { CharactersService } from '../characters.service';

@Component ({
  selector: 'secondPage-app',
  templateUrl: './secondPage.component.html'
})
export class SecondPageComponent {
  characters: any;

  constructor(public service: CharactersService) {
    this.characters = service.characters;
  }
}
