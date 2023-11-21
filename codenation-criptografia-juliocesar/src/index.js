const sha1 = require('js-sha1')

const consultaApi = require('./consultaAPI');
const descriptografa = require('./descriptografa');
const inputOutput = require('./InputOutput');

const main = async () => {
    const objetoRetornoApi = await consultaApi.buscaJsonNaApi();
    objetoRetornoApi.decifrado = descriptografa.descriptografa(objetoRetornoApi.cifrado);
    objetoRetornoApi.resumo_criptografico = sha1(objetoRetornoApi.decifrado);
    inputOutput.escreveArquivoJson(objetoRetornoApi);
}

main()
