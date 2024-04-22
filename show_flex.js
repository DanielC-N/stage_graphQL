import { readFileSync } from 'node:fs';

function generateHTML() {
    const resJson = readFileSync('./res_diegesis.json').toJSON();
    console.log(JSON.stringify(resJson, null, 4));
}

generateHTML()
