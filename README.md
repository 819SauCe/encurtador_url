# Projeto Encurtador de URL - Documentação
## Descrição
Este projeto é um encurtador de URL desenvolvido utilizando Java (Spring Boot) para o backend e Angular para o frontend. O sistema tem como principal objetivo permitir que os usuários insiram um link, que será encurtado e armazenado no banco de dados PostgreSQL por até uma semana. O encurtador possui funcionalidades adicionais, como o timer, exigindo um tempo de espera antes de redirecionar o usuário ao link original, e a opção de definir uma senha para acessar o link original.
## Funcionalidades principais!
- Encurtamento de URL: O usuário insere uma URL e o sistema gera um código encurtado, redirecionando para o link original.
- Armazenamento temporário: O link encurtado é armazenado por uma semana no banco de dados.
- Redirecionamento: Ao acessar o código encurtado na URL do servidor, o sistema redireciona para o link original.
- Timer: O usuário pode definir um tempo de espera para ser redirecionado à URL original.
- Senha de Acesso: O usuário pode definir uma senha que será exigida antes de acessar a URL original.
## Tecnologias utilizadas
- Backend: Spring Boot (Java)
- Frontend: Angular
- Banco de dados: PostgreSQL
- Containerização: Docker
## Como Rodar o Projeto
### Pré-requisitos:
- Docker
- Docker Compose
### Passos para rodar o projeto
Clone
```git clone <url-do-repositorio>```
Vá até o repositorio
```cd encurtador_url```
Rode o docker
```docker compose up```
Isso irá rodar o backend, o frontend e o banco de dados dentro de containers Docker. Após a execução, o projeto estará disponível na seguinte URL
### Conexões
- Frontend (Angular): http://localhost:4200
- Backend (Spring Boot): http://localhost:8080
- Banco de dados (PostgreSQL): localhost:5432
## Funcionalidades Detalhadas
### Encurtamento de URL
O usuário insere um link no campo apropriado na interface do frontend.
O backend gera um código único para o link e armazena no banco de dados.
O código gerado pode ser acessado pelo usuário através da URL http://<ip>:<porta>/<codigo-encurtado>, que redireciona automaticamente para o link original.
### Timer
- O usuário pode definir um tempo de espera (em segundos) antes de ser redirecionado ao link original.
- Isso é configurado através da interface do frontend, e o backend implementa a lógica para verificar o tempo de espera antes de redirecionar.
### Senha de Acesso
- O usuário tem a opção de adicionar uma senha para proteger o link encurtado.
- O sistema solicitará a senha antes de redirecionar para o link original.
### Armazenamento Temporário
- O link encurtado é armazenado no banco de dados PostgreSQL por uma semana.
- Após esse período, o link expira e não poderá mais ser acessado.
## Arquitetura do Projeto
### Backend (Spring Boot)
O backend foi desenvolvido em Spring Boot e tem a responsabilidade de:
- Receber as requisições para criar e recuperar links encurtados.
- Gerenciar a lógica de redirecionamento, incluindo o timer e a senha de acesso.
- Interagir com o banco de dados PostgreSQL para armazenar e consultar as URLs.
### Frontend (Angular)
O frontend foi desenvolvido em Angular e é responsável por:
- Permitir ao usuário inserir a URL a ser encurtada e definir as opções de timer e senha.
- Exibir as informações sobre o link encurtado e permitir a cópia do código gerado.
- Interagir com o backend para enviar e receber dados.
### Banco de Dados (PostgreSQL)
O banco de dados PostgreSQL é usado para armazenar as URLs encurtadas e informações adicionais, como tempo de expiração e senha de acesso.
## Desafios e Aprendizados
### Java (Spring Boot)
- Desafios: A arquitetura do projeto foi um pouco desafiadora no começo, especialmente com relação à organização de pacotes e integração com o banco de dados.
- Aprendizado: A sintaxe do Java é bastante clara e poderosa, o que facilitou a implementação das funcionalidades. Aprendi muito sobre a estrutura do Spring Boot e como ele facilita a criação de APIs RESTful.
### Angular
- Desafios: No começo, foi difícil entender a arquitetura do Angular e como configurar os componentes, serviços e rotas de maneira eficaz.
- Aprendizado: Com o tempo, consegui me adaptar à estrutura do Angular, especialmente no que diz respeito à comunicação entre o frontend e o backend, e ao uso do Angular CLI para agilizar o desenvolvimento.
### Docker
- Desafios: Configurar o Docker para rodar tanto o frontend, quanto o backend e o banco de dados simultaneamente foi um desafio interessante.
- Aprendizado: A utilização do Docker Compose foi fundamental para orquestrar os containers de forma simples e eficiente, garantindo que o projeto fosse facilmente configurado e rodado em qualquer ambiente.
## Próximos Passos
Agora que o projeto está funcional, o objetivo é colocá-lo no ar e melhorar sua visibilidade. Alguns dos planos para o futuro incluem:
- Colocar o projeto no ar: Implantar o projeto em uma plataforma de hospedagem (exemplo: AWS, Heroku).
- Implementar anúncios e SEO: Para monetizar o projeto e aumentar sua visibilidade nas ferramentas de busca.
- Melhorias no design e usabilidade: Continuar ajustando o layout para torná-lo ainda mais responsivo e intuitivo.
# Conclusão
Este projeto foi uma excelente oportunidade para aprender sobre o desenvolvimento de aplicações completas usando Spring Boot para o backend e Angular para o frontend. Além disso, a experiência de trabalhar com o PostgreSQL e Docker foi extremamente enriquecedora. O objetivo do projeto era focar em aprender essas tecnologias, e o resultado foi muito positivo.
