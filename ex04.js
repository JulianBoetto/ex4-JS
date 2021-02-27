var nomes = document.querySelector("#nome");
var sobreNomes = document.querySelector("#sobreNome");
var idades = document.querySelector("#idade");
var form = document.querySelector("form");
var btnExibirMaisVelhos = document.querySelector("#exibirMaisVelhos");
var resultado = document.querySelector("#resultado")
var listaPessoas = document.querySelector("#pessoasAdi");
var utimaPessoa = document.querySelector("#utimaPessoa");



var pessoas = [];


//Adiciona pessoas
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var pessoa = {
    nome: nomes.value,
    sobreNome: sobreNomes.value,
    idade: Number(idades.value)
  };

  pessoas.push(pessoa);
  
  nomes.value = "";
  sobreNomes.value = "";
  idades.value = "";
    
  utimaPessoa.textContent = `${pessoa.nome} ${pessoa.sobreNome} de ${pessoa.idade} anos`;

adiciona();


function adiciona() {
    
    pessoasAdi.textContent = `${pessoa.nome} ${pessoa.sobreNome} de ${pessoa.idade} anos`;
    var listaPessoas = document.createElement("ul");
  
        for (let pessoa of pessoas) {
        var itemPessoas = document.createElement("li");
        itemPessoas.textContent = `${pessoa.nome} ${pessoa.sobreNome} de ${pessoa.idade} anos`;
        listaPessoas.appendChild(itemPessoas);
        }
        
    pessoasAdi.innerHTML = "";
    pessoasAdi.appendChild(listaPessoas);
}
});




// Botao para exibir as pessoas maiores
btnExibirMaisVelhos.addEventListener("click", function exibirMaisVelhos() {
    let lista = document.createElement("ul");
  
        for (let pessoaMaisVelha of pessoasMaisVelhas(pessoas)) {
        let item = document.createElement("li");
        item.textContent = `${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos`;
        lista.appendChild(item);
        }
  
    resultado.innerHTML = "";
    resultado.appendChild(lista);
    });
  
    function pessoasMaisVelhas(pessoas) {
    let maisVelhasAtuais = [pessoas[0]];
  
        for (let pessoa of pessoas.slice(1)) {
            if (maisVelhasAtuais[0].idade < pessoa.idade) {
                maisVelhasAtuais = [pessoa];
            } 
            
            else if (maisVelhasAtuais[0].idade === pessoa.idade) {
                maisVelhasAtuais.push(pessoa);
            }
        }
  
    return maisVelhasAtuais;
}

