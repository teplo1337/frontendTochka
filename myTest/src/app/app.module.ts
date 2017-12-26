import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './firstPage.component';
import { SecondPageComponent } from './SecondPage.component';
import { NotFoundComponent } from './notFound.component';
import { CharactersService } from './characters.service'

const appRoutes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'result', component: SecondPageComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FirstPageComponent,
    SecondPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
