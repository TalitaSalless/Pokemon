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
2. Faça o download do projeto: [link do repositório](https://github.com/TalitaSalless/Pokemon).
3. Abra o terminal e navegue até o diretório raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a conclusão da instalação, execute o comando `npm start` para iniciar a aplicação.
6. A aplicação será aberta em seu navegador padrão e estará disponível no endereço `http://localhost:3000`.

*Certifique-se de que a PokeAPI esteja acessível para que a aplicação possa obter os dados dos Pokémons corretamente.*

## Minhas maiores dificuldades foram: 
- Manipulação dos dados da API. 
- Organização da parte lógica dentro dos componentes.

*Caso você tenha a mesma dificuldade aqui estão algumas dicas que podem ajudar:*

- <b>Compreenda a estrutura dos dados</b>: Antes de começar a manipular os dados da API, é importante entender como eles são estruturados. Verifique a documentação da API para obter informações sobre a estrutura dos objetos retornados, os campos disponíveis e como acessar os dados desejados.
 -<b>Utilize bibliotecas de requisição HTTP</b>: Em projetos React, é comum utilizar bibliotecas como Axios ou Fetch para fazer as requisições HTTP e obter os dados da API. Essas bibliotecas fornecem métodos simples para enviar requisições GET e receber as respostas.
- <b>Lide com respostas assíncronas</b>: As requisições HTTP são assíncronas por natureza, o que significa que você precisa lidar com as respostas de forma assíncrona também. Utilize recursos como Promises, async/await ou callbacks para lidar com as respostas e aguardar a conclusão das requisições antes de manipular os dados.
- <b>Mapeie os dados para objetos utilizáveis</b>: Após obter os dados da API, você pode precisar mapeá-los para um formato mais adequado ao seu projeto. Por exemplo, se a API retornar uma lista de objetos com campos complexos, você pode extrair apenas os campos necessários e organizá-los em um objeto ou array mais simples para uso no seu aplicativo.
- <b>Separe a lógica de manipulação dos dados</b>: Para facilitar a manutenção e a compreensão do código, é recomendável separar a lógica de manipulação dos dados em funções ou componentes separados. Isso ajudará a manter o código mais organizado e modular, facilitando também a reutilização e a depuração.
- <b>Teste os dados manipulados</b>: À medida que você manipula os dados da API, é importante testar se eles estão sendo manipulados corretamente. Verifique se os dados estão sendo extraídos corretamente, se as transformações estão sendo aplicadas corretamente e se os objetos resultantes estão no formato esperado.
- <b>Utilize ferramentas de depuração</b>: Se você estiver enfrentando dificuldades específicas na manipulação dos dados, utilize as ferramentas de depuração disponíveis, como console.log, para exibir informações relevantes durante a execução do código. Isso pode ajudar a identificar erros ou entender melhor como os dados estão sendo manipulados em determinados pontos do código.

Lembre-se de que a manipulação de dados da API pode variar dependendo da API específica que você está usando. É sempre uma boa prática consultar a documentação oficial da API para obter informações detalhadas sobre como acessar e manipular os dados fornecidos.
