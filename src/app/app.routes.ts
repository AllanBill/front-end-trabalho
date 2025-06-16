import { Routes } from '@angular/router';
// Importa o componente Home
import { Home } from './pages/home/home';
// Importa o componente Sobre
import { Sobre } from './pages/sobre/sobre';

// Define as rotas da aplicação
export const routes: Routes = [
  // Rota padrão que renderiza o componente Home
  { path: '', component: Home },
  // Rota '/sobre' que renderiza o componente Sobre
  { path: 'sobre', component: Sobre }
];
