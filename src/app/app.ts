import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    Home,
    Sobre
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
