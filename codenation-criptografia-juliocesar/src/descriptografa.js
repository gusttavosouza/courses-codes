const vectorLetras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

exports.descriptografa = function(frase) {
    let fraseDescriptografada = "";
    for (let i = 0; i < frase.length; i++) {
        let idVetor = vectorLetras.indexOf(frase[i]);
        if (idVetor !== -1) {
            if ((idVetor - 8) < 0) {
                let resto = 8 - idVetor;
                idVetor = (vectorLetras.length - resto);
                fraseDescriptografada += vectorLetras[idVetor]
            } else {
                fraseDescriptografada += vectorLetras[idVetor - 8]
            }
        } else {
            fraseDescriptografada += frase[i]
        }
    }
    return fraseDescriptografada;
}
