import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Componente raiz da aplicação.
 *
 * @remarks
 * Este componente é marcado como `standalone` e serve como ponto de entrada para a aplicação Angular.
 * Utiliza o `RouterModule` para roteamento e faz referência a arquivos externos de template e estilos.
 *
 * @selector app-root
 * @imports RouterModule
 * @templateUrl ./app.html
 * @styleUrls ./app.css
 */
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
