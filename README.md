# Pesquisa Eleitoral - Intenção de Votos

Este projeto é uma aplicação Node.js que estima a intenção de votos em eleições para presidente do Brasil, com base em pesquisas eleitorais realizadas em municípios de diferentes portes e estados. A aplicação importa dados de municípios e estados do IBGE, processa arquivos de pesquisa eleitoral e exibe os resultados em um dashboard.

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- NPM (geralmente instalado com o Node.js)

### Passos para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/renanalgaba/teste-pesquisa-eleitoral.git
   cd teste-pesquisa-eleitoral
   ```

Instale as dependências:

    ```bash
    npm install
    ```

Certifique-se que o diretório data possui o arquivo P1.csv (ou outro arquivo de pesquisa no formato correto).

Execute o servidor:

```bash

npm start
```

O servidor estará rodando em http://localhost:3000.

Rotas da Aplicação
1. Importar Pesquisas Eleitorais
Endpoint: POST /pesquisa/importar

Descrição: Importa um arquivo CSV de pesquisas eleitorais e salva os dados no arquivo pesquisas.json.

Como usar:

Envie um arquivo CSV no formato correto para o diretório data.

Execute o endpoint:

```bash
curl -X POST http://localhost:3000/pesquisa/importar
```

2. Atualizar Base de Municípios e Estados
Endpoint: POST /atualizar-base

Descrição: Atualiza a base de municípios e estados com dados do IBGE.

Como usar:

Execute o endpoint:

```bash

curl -X POST http://localhost:3000/atualizar-base
```

3. Visualizar Dashboard
Endpoint: GET /dashboard

Descrição: Exibe um dashboard com a evolução temporal das intenções de votos.

Como usar:

Acesse no navegador:

```
http://localhost:3000/dashboard
```

Estrutura do Projeto

/teste-pesquisa-eleitoral
├── /src
│   ├── /routes
│   ├── /services
│   ├── /utils
│   ├── /views
│   └── app.js
├── /data
│   ├── P1.csv
│   ├── pesquisas.json
│   └── municipios-estados.json
├── package.json
└── README.md


Dependências
Express: Framework para criar o servidor.

Axios: Para fazer requisições HTTP à API do IBGE.

csv-parser: Para ler arquivos CSV.

ejs: Para renderizar o dashboard.

Instale as dependências com:

```bash

npm install express axios csv-parser ejs

```

Contribuição
Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Abra uma issue ou envie um pull request.

Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

Copy

---

### Como Adicionar ao Repositório

1. Copie o conteúdo acima.
2. Crie um arquivo chamado `README.md` na raiz do seu projeto.
3. Cole o conteúdo no arquivo.
4. Salve o arquivo.
5. Adicione o arquivo ao Git, faça commit e envie para o repositório:

   ```bash
   git add README.md
   git commit -m "Adiciona README.md"
   git push