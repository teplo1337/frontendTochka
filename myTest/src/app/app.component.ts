import { Component } from '@angular/core';
import { CharactersService } from './characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  changeRoute(link: string) {
    this.router.navigate([link]);
  }

  constructor(private router: Router) {
  }
}
