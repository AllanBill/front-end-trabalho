// Importa a função para inicializar a aplicação Angular no navegador
import { bootstrapApplication } from '@angular/platform-browser';
// Importa o provedor de rotas para configurar o roteamento
import { provideRouter } from '@angular/router';

// Importa o componente principal da aplicação
import { AppComponent } from './app/app.component';
// Importa as rotas definidas para a aplicação
import { routes } from './app/app.routes';

// Inicializa a aplicação Angular com o componente principal e o provedor de rotas
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
