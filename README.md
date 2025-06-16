
Projeto Front-End Trabalho

Este projeto é uma aplicação Angular moderna que utiliza componentes standalone e roteamento para criar uma interface simples com páginas Home e Sobre.

---

Pré-requisitos

- Node.js (versão 16 ou superior recomendada)  
  Baixe aqui: https://nodejs.org/

- Angular CLI (opcional, para rodar comandos localmente)  
  Para instalar globalmente (se desejar):  
  npm install -g @angular/cli

---

Como executar o projeto

1. Clone este repositório:  
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Entre na pasta do projeto:  
   cd seu-repositorio/front-end-trabalho

3. Instale as dependências:  
   npm install

4. Execute a aplicação:  
   ng serve --open  
   Ou, caso tenha o script no package.json:  
   npm start

5. O navegador abrirá automaticamente no endereço:  
   http://localhost:4200/

---

Observações importantes

- O projeto usa Zone.js para gerenciamento de mudanças, que já está incluído nas dependências.
- Se o navegador não abrir automaticamente, acesse o endereço manualmente.
- O projeto está estruturado com componentes standalone, e o bootstrap é feito via bootstrapApplication no arquivo main.ts.

---

Estrutura do Projeto

- src/app/pages/home - Página Home (conteúdo principal inicial)  
- src/app/pages/sobre - Página Sobre (informações adicionais)  
- src/app/app.routes.ts - Definição das rotas da aplicação  
- src/app/app.component.ts - Componente raiz da aplicação  
- src/main.ts - Ponto de entrada e bootstrap da aplicação

---

Contato

Em caso de dúvidas ou problemas, entre em contato com Allan Schuster Bill.

---

Obrigado por testar o projeto! 🚀
