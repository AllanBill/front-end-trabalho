import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  mostrarMensagem() {
    alert('Eu falei para você não apertar!');
  }
}
