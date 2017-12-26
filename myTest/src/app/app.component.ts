import { Component } from '@angular/core';
import { CharactersService } from './characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCharacters: [(Object)] = [{ kek: 'kek'}];

  goToSecondPage() {
    this.router.navigate(
      ['/result']
    )
  }

  constructor(private router: Router) {
  }
}
