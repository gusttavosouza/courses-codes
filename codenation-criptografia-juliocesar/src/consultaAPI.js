const axios = require('axios');

const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=8f921ebb7ca9235fa55a1cfbdd6a73a85bea9018'

exports.buscaJsonNaApi = async function() {
    let retorno = await axios.get(url, {});
    return retorno.data;
}
