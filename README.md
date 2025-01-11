# Pesquisa Eleitoral - Intenção de Votos

Esta aplicação foi desenvolvida para estimar a intenção de votos em eleições para presidente do Brasil, com base em pesquisas eleitorais realizadas em municípios de diferentes portes e estados. A aplicação é capaz de importar dados de municípios e estados do IBGE, processar arquivos de pesquisa eleitoral e exibir os resultados em um dashboard.

## Requisitos do Desafio

O desafio consiste em criar uma aplicação em Node.js que:

1. **Sincronize dados da base de municípios e estados brasileiros** por meio de um serviço acionado mensalmente ou manualmente.
2. **Importe arquivos de pesquisa eleitoral**.
3. **Calcule a intenção de votos** de cada candidato, considerando o porte do município e o estado.
4. **Exiba a evolução temporal das intenções de votos** em um dashboard simplificado.

## Como Executar a Aplicação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- NPM (geralmente instalado com o Node.js)
- Git (opcional, para clonar o repositório)

### Passo a Passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/renanalgaba/teste-pesquisa-eleitoral
   cd teste-pesquisa-eleitoral