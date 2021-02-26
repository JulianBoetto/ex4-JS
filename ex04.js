let nomes = document.querySelector("#nome");
let sobreNomes = document.querySelector("#sobreNome");
let idades = document.querySelector("#idade");
let form = document.querySelector("form");
let btnExibirMaisVelhos = document.querySelector("#exibirMaisVelhos");
let resultado = document.querySelector("#resultado")
let pessoasAdi = document.querySelector("#pessoasAdi")

let pessoas = [];

//Adiciona pessoas
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let pessoa = {
    nome: nomes.value,
    sobreNome: sobreNomes.value,
    idade: Number(idades.value)
  };

  pessoas.push(pessoa);

  nomes.value = "";
  sobreNomes.value = "";
  idades.value = "";
  
  //Cria a lista com o nome completo das pessoas
  
  pessoasAdi.textContent = `${pessoa.nome} ${pessoa.sobreNome} de ${pessoa.idade}`;
});


//Botao para exibir as pessoas maiores
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
      } else if (maisVelhasAtuais[0].idade === pessoa.idade) {
        maisVelhasAtuais.push(pessoa);
      }
    }
  
    return maisVelhasAtuais;
  }

//     // //Pega os valores
//     // let newNome = nome.value;
//     // nomes.push(newNome);
//     // nome.value = "";
//     // let newSobre = sobreNome.value;
//     // sobreNomes.push(newSobre);
//     // sobreNome.value = "";
//     // let newIdade = idade.value;
//     // idades.push(newIdade);
//     // idade.value = "";
    
//     // //Elabora os dados completos
//     // let nomeCompleto = newNome + " " + newSobre + " de " + newIdade + " anos" ;
//     // //Crea o elemento
//     // let listNomeCompleto = document.createElement("li");
//     // listNomeCompleto.textContent = nomeCompleto;

//     // //Adiciona o elemento ao final do formulario
//     // taskList.appendChild(listNomeCompleto);  

 
// btnPessoaMaior.addEventListener("click", function exibirMaisVelhos() {
//     let lista = document.createElement("ul");
  
//     for (let pessoaMaisVelha of pessoasMaisVelhas(pessoas)) {
//       let item = document.createElement("li");
//       item.textContent = `${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos`;
//       lista.appendChild(item);
//     }
  
//     taskList.innerHTML = "";
//     taskList.appendChild(lista);
// });
