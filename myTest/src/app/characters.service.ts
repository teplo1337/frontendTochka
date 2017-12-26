import { Injectable } from '@angular/core';
import { CHARACTERS } from './data';

@Injectable()
export class CharactersService {
  characters:any;
  //можно сделать импорт из JSON get
  constructor() {
    this.characters = CHARACTERS;
  }
}
