const lista = ["Maria benedita da SilvA", "joão ricardo albuquerque", "JOSÉ de Arimatéia"]
const listaAuxiliar = []
const listaCorrigida = []

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

for (let i = 0; i < lista.length; i++) {

    //transforma todos os caracteres em minúsculo
    nome = lista[i]
    nome = nome.toLowerCase();
    listaAuxiliar.push(nome);

    //transforma o primeiro caractere em maiúsculo
    nome = listaAuxiliar[i].split(" ");

    //percorre a lista com os nomes separados
    nomeCompletoCorrigido = []
    for (let j = 0; j < nome.length; j++) {
        
        if ((nome[j] == "de") || (nome[j] == "da")) {
            nomeCompletoCorrigido += nome[j] + " "
        } else {
            nomeCompletoCorrigido += nome[j].replaceAt(0, nome[j][0].toUpperCase()) + " "
        }
    }
    //retira o espaço depois do fim do nome
    listaCorrigida.push(nomeCompletoCorrigido.trim())
    
}

console.log(listaCorrigida);
