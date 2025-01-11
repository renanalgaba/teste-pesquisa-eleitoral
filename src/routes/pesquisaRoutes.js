const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.post('/importar', (req, res) => {
    const filePath = path.join(__dirname, '../../data/P1.csv');
    const pesquisas = [];

    fs.createReadStream(filePath)
        .pipe(csv({ separator: ';' }))
        .on('data', (row) => {
            const pesquisa = {
                id: row.ID_PESQUISA,
                data: row.DATA_PESQUISA,
                municipio: row.MUNICÍPIO,
                estado: row.ESTADO,
                intencaoVoto: row['INTENÇĂO DE VOTO']
            };
            pesquisas.push(pesquisa);
        })
        .on('end', () => {
            fs.writeFileSync(path.join(__dirname, '../../data/pesquisas.json'), JSON.stringify(pesquisas, null, 2));
            res.status(200).send('Pesquisas importadas com sucesso!');
        });
});

module.exports = router;