function addNewTask() {
    let nome = document.querySelector('#newNome');
    let sobreNome = document.querySelector('#newSobre');
    let idade = document.querySelector('#newIdade');
    let taskList = document.querySelector('#taskList')

    let newNome = nome.value;
    let newSobre = sobreNome.value;
    let newIdade = idade.value;
    
    // let listNome = document.createElement("li");
    // listNome.textContent = newNome;
    // let listSobre = document.createElement("li");
    // listSobre.textContent = newSobre;
    // let listIdade = document.createElement("li");
    // listIdade.textContent = newIdade;

    let nomeCompleto = newNome + " " + newSobre;

    let listNomeCompleto = document.createElement("li");
    listNomeCompleto.textContent = nomeCompleto;

    taskList.appendChild(listNomeCompleto);

    // taskList.appendChild(listNome);
    // taskList.appendChild(listSobre);
    // taskList.appendChild(listIdade);
}





maior = 0;

for(var i=0,len=idades .length;i<len;i++){
 if(maior < idades [i]){
     maior = idades [i];
}
}
console.log("A pessoa maior tem " + maior + " anos");
