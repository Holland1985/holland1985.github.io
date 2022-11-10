
function addAluno() {
   
    let nome = prompt("Nome: ");
    let matricula = prompt("Matrícula: ");
    // Jeito 1
    let nota1 = parseFloat(prompt("Nota1: "));
    let nota2 = prompt("Nota2: ");    
    let nota3 = prompt("Nota3: ");

    // jeito 2
    nota2 = parseFloat(nota2);


    // jeito 3
    let a = new Aluno(nome, matricula, nota1, nota2, parseFloat(nota3));
    insertAluno(a)
    
};

function insertAluno(aluno) {
    const table = document.querySelector('table');   
    let body = table.querySelector('tbody');
    let row = body.insertRow();
    let cellnome = row.insertCell(0);
    let cellmatricula = row.insertCell(1);
    let cellnota1 = row.insertCell(2);
    let cellnota2 = row.insertCell(3);
    let cellnota3 = row.insertCell(4);
    let cellmedia = row.insertCell(5);
    let cellbotao = row.insertCell(6);
    cellnome.innerHTML = aluno.nome;
    cellmatricula.innerHTML = aluno.matricula;
    cellnota1.innerHTML = aluno.nota1;
    cellnota2.innerHTML = aluno.nota2;
    cellnota3.innerHTML = aluno.nota3;
    let media = aluno.calculaMedia()
    cellmedia.innerHTML = media;
    cellbotao.innerHTML = '<button class="botao">X</button>';
    if (media < 7 ){
        cellmedia.classList.add("mediabaixa")    
    }
    

     
};


document.querySelector("table").onclick = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target.classList.contains('botao')) {
        let linha = event.target.parentElement.parentElement;        
        if (confirm(`Deseja remover o aluno ${linha.firstChild.innerHTML}?`)) {
            linha.remove();
        }
    }
}







