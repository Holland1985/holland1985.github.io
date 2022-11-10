class Aluno {
    nome;
    matricula;
    nota1;
    nota2;
    nota3;

    constructor (nome, matricula, nota1, nota2, nota3) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    exibeInfo() {
        return `Aluno: ${this.nome} - mat: ${this.matricula} Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3} Média: ${this.calculaMedia()};
        `
    }
    calculaMedia() {
        return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
    }

    

}

//const a1 = new Aluno("João Das Neves", 1155, 10, 9, 10);
//console.log (a1.exibeInfo());

//myArray = a1.nome.split(" ");
//console.log(myArray[0]);

