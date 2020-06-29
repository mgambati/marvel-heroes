## Marvel Heroes ![](https://github.com/mgambati/marvel-heroes/workflows/CI/badge.svg)

Projeto para Desafio Técnico da Softplan.

### Stack
- State management com redux e @reduxjs/toolkit
- Routing com react-router-dom
- UI com theme-ui
- Typescript
- Testes com Jest e @testing-library/react
- Mocks de requests com [MSW](https://mswjs.io)

### Como executar

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```
REACT_APP_MARVEL_API_KEY=<public key>
```

Substitua `<public key>` com sua chave pública da API da Marvel que você pode obter [aqui](https://developer.marvel.com/).


Instale as dependências:
```
yarn install
```

Para iniciar o projeto execute o comando abaixo e abra no seu browser [http://localhost:3000](http://localhost:3000):
```bash
yarn start
```

Para rodar os testes do projeto:

```
yarn test
```