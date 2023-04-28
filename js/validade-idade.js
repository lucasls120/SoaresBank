export default function ehMaiordeIdade(campo){
    const dataNascimento = new Date (campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usúario não é Maior de Idade')
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= datamais18;
}