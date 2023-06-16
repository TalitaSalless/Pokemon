# Projeto "Pokemon"

## Descrição

O projeto "Pokemon" é uma aplicação web que permite aos usuários explorar informações sobre os diferentes Pokémons. Ele consome a API pública do Pokémon (PokeAPI) para obter dados sobre os Pokémons, como seus nomes, imagens, estatísticas, movimentos e habilidades.

## Funcionalidades

- Exibição de uma lista de Pokémons: A aplicação exibe uma lista de Pokémons com seus nomes e imagens. Os usuários podem clicar em um Pokémon para obter mais detalhes.
- Detalhes do Pokémon: Ao selecionar um Pokémon na lista, a aplicação exibe informações detalhadas sobre o Pokémon, incluindo seu ID, pontos de vida (HP), tipo(s), estatísticas de ataque, defesa e velocidade, movimentos e habilidades.

## Ferramentas Utilizadas

- React: O projeto utiliza o framework React para construir a interface do usuário de forma eficiente e modular.
- Axios: A biblioteca Axios é utilizada para realizar requisições HTTP e obter dados da API do Pokémon de forma assíncrona.
- Styled Components: A biblioteca Styled Components é utilizada para estilizar os componentes React de forma mais flexível e modular.

## Decisões Adotadas

Durante o planejamento e execução do projeto, foram tomadas as seguintes decisões:

- Utilização de uma API pública: Optou-se por utilizar a PokeAPI, uma API pública bem documentada e amplamente utilizada para obter dados sobre os Pokémons.
- Carregamento de dados por demanda: A aplicação carrega inicialmente uma lista limitada de Pokémons e, em seguida, carrega mais Pokémons à medida que o usuário solicita.
- Organização em componentes reutilizáveis: O projeto é dividido em componentes reutilizáveis para facilitar o desenvolvimento, a manutenção e a escalabilidade do código.

## Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado no seu computador.
2. Faça o download do projeto do repositório: [link do repositório](https://github.com/TalitaSalless/Pokemon).
3. Abra o terminal e navegue até o diretório raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a conclusão da instalação, execute o comando `npm start` para iniciar a aplicação.
6. A aplicação será aberta em seu navegador padrão e estará disponível no endereço `http://localhost:3000`.

Certifique-se de que a PokeAPI esteja acessível para que a aplicação possa obter os dados dos Pokémons corretamente.

