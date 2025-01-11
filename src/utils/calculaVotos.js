// src/utils/calculaVotos.js
const fs = require('fs');
const path = require('path');

const calculaIntencaoVotos = (pesquisaId) => {
    const pesquisasPath = path.join(__dirname, '../../data/pesquisas.json');
    const municipiosPath = path.join(__dirname, '../../data/municipios-estados.json');

    if (!fs.existsSync(pesquisasPath) || !fs.existsSync(municipiosPath)) {
        throw new Error('Arquivos de dados não encontrados.');
    }

    const pesquisas = JSON.parse(fs.readFileSync(pesquisasPath, 'utf-8'));
    const municipios = JSON.parse(fs.readFileSync(municipiosPath, 'utf-8'));

    const pesquisa = pesquisas.filter(p => p.id === pesquisaId);
    if (pesquisa.length === 0) {
        throw new Error(`Pesquisa com ID ${pesquisaId} não encontrada.`);
    }

    const resultados = {};

    pesquisa.forEach(p => {
        const municipio = municipios.find(m => m.nome === p.municipio && m.estado === p.estado);
        if (municipio) {
            const porte = getPorte(municipio.populacao);
            const candidato = p.intencaoVoto;

            if (!resultados[candidato]) {
                resultados[candidato] = 0;
            }
            resultados[candidato] += 1 * porte;
        }
    });

    return resultados;
};

const getPorte = (populacao) => {
    if (populacao <= 20000) return 1;
    if (populacao <= 100000) return 2;
    if (populacao <= 1000000) return 3;
    return 4;
};

module.exports = { calculaIntencaoVotos };