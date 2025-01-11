const axios = require('axios');
const fs = require('fs');
const path = require('path');

const updateMunicipiosEstados = async () => {
  try{
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
    const data = response.data.map(municipio => ({
      id: municipio.id,
      nome: municipio.nome,
      estado: municipio.microrregiao.mesorregiao.UF.sigla,
      populacao: Math.floor(Math.random() * 1000000)
    }))

    fs.writeFileSync(path.join(__dirname, '../../data/municipios-estados.json'), JSON.stringify(data, null, 2 ));
    console.log('Base de municípios e estados atualizada com sucesso!');

  }catch(error) {
    console.error('Erro ao atualizar base de municípios e estados:', error);
  }
};

module.exports = { updateMunicipiosEstados };