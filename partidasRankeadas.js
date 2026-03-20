let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

calculaRanke(50, 5);

function calculaRanke(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = niveis[0];
    } else if (vitorias <= 20) {
        nivel = niveis[1];
    } else if (vitorias <= 50) {
        nivel = niveis[2];
    } else if (vitorias <= 80) {
        nivel = niveis[3];
    } else if (vitorias <= 90) {
        nivel = niveis[4];
    } else if (vitorias <= 100) {
        nivel = niveis[5];
    } else {
        nivel = niveis[6];
    }

    return console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}