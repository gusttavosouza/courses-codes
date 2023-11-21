const fs = require('fs');

exports.escreveArquivoJson = function (dados) {
    fs.writeFile('./src/assets/answer.json', JSON.stringify(dados), (err) => {
        if (err) {
            console.log(`Houve um erro ${err}`)
        }
    })
}

module.lerArquivoJson = async function () {
    return await new Promise(resolve => {
        fs.readFile('./src/assets/answer.json', 'utf8', (err, data) => {
            let objArquivo = JSON.parse(data);
            resolve(objArquivo);
        })
    }, reject => {
        console.log(`Houve um problema no na leiturado Arquivo ${reject}`)
    });
}